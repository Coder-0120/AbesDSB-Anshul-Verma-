const express=require('express');
const app=express();
app.use(express.json());


app.get("/",(req,res)=>{
    res.send("hello world");
})

app.get("/",(req,res)=>{
    res.send("hello world 2");
})

app.post("/",(req,res)=>{
    const {name}=req.body;
    res.send(`Welcome ${name}`)
})

// when 2 res on same adddress --> then show only which first written in code
app.listen(5000,(error)=>{
    if(error){
        console.log("error");
    }
    else{
        console.log("server is running on port 5000");

    }
})