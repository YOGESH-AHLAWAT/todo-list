const express = require("express");
const bodyParser = require("body-parser");

const app =new express();

app.get("/",function(res,req){
    res.send("Hello");
})

app.listen(3000,function(){
    console.log("Server running on port 3000");
})