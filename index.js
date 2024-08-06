const express=require("express");
const http=express();
const cors=require("cors");
const {connectToDatabase}=require('./Database/data');
const App=require("./app");
const PORT=3500;

connectToDatabase();
http.use(cors()),
http.use("/api",App);

   
http.listen (PORT,()=>{
    console.log("starting...3500");
});




