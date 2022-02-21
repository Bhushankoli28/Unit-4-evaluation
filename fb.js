const express = require("express");
const { append } = require("vary");
const fb = express();

fb.get("/",(req, res) => {
    res.json({
        "First Name": "Bhushan",
        "Last Name": "Koli",
        "Age":"26",
        "email":"bhushankoli26@gmail.com",
        "profile img": "Null",
        "time stamps": "Null"

    })
})
fb.post("/",(req,res)=>{
    console.log(req.body);
})


fb.listen(8045,()=>{
    console.log("Port is working");
})