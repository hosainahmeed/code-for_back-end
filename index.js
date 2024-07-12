const express = require("express");
const app = express();
let port = 3000;
app.get("/",(req,res)=>{
    res.send("this is the home page")
})
app.get("/about",(req,res)=>{
    res.send("this is the about page")
})
app.get("/contact",(req,res)=>{
    res.send("this is the contact page")
})
app.get("/works",(req,res)=>{
    res.send("this is the works page")
})

app.listen(process.env.PORT,()=>{
    console.log(`listening on ${port}`);
})