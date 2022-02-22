const express=require("express")
const mongoose=require("mongoose")
const sessonController=require("./controller/session-controller")
const roleController=require("./controller/role-controller")
const userController = require("./controller/user-controller")
const courseController=require("./controller/course-controller")



const app = express()
//middale ware
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//database
mongoose.connect('mongodb://localhost:27017/ecom',function(err){
  if(err){
    console.log("db connecton fail......");
    console.log(err);

  }else{
    console.log("db connected");
  }
})


app.get("/",function(req,res){
    res.write('welcome.')
    res.end()
})



  app.get("/login",sessonController.login)
  app.get("/signup",sessonController.signup)
  app.post("/saveUser",sessonController.saveUsers)
  
//role
app.post("/roles",roleController.addRole)
app.get("/roles",roleController.getAllRoles)
app.delete("/roles/:roleId",roleController.deleteRole)
app.put("/roles",roleController.updateRole)


//user 
app.post("/users",userController.addUser)
app.get("/users",userController.getAllUsers)
app.delete("/users/:userId",userController.deleteUser)
app.put("/users",userController.updateUser)

app.post("/login",userController.login)

//course
app.post("/courses",courseController.addCourse)
app.get("/courses",courseController.getAllCourse)
app.delete("/courses/:courseId",courseController.deleteCourse)





app.listen(3000,function(){
    console.log("server started on 3000")
})