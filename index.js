const express = require("express");
const users = require("./MOCK_DATA.json");
// const http = require("http");
const app = express();
const port= 8000;


//Routes 
app.get("/users",(req,res)=>{
  return res.json(users);
})


//Dynamically http://localhost:8000/users/4
app.get("/users/:id",(req,res)=>{
  const id=Number(req.params.id);
  const user =users.find((user)=> user.id===id);
  return res.json(user);
})

//post
app.post("/users",(req,res)=>{
  return res.json({status:"pending"});
});

//patch
app.patch("/users/:id",(req,res)=>{
  return res.json({status:"pending"});
})


//delete
app.delete("/users/:id",(req,res)=>{
  return res.json({status:"pending"});
})

app.listen(port,()=>console.log(`server started at port ${port}`));


//Home Page Request
// app.get("/", (req, res) => {
//   return res.send("hello , I am Ankit Kansal");
// });

//About Page Request
// app.get("/about", (req, res) => {
//   return res.send("hello , I am Ankit Kansal");
// });


// const myServer=http.createServer(app);
// myServer.listen(8000,()=>console.log("server started"));