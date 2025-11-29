const express =require("express");
const app=express();
const port=5000;

app.get("/",(req,res)=>{
    res.send("my first server..")
})

app.get("/about",(req,res)=>{
    const students=[
        {
            id:1,
            name:"Anshul",
            class:"10"
        },
        {
            id:2,
            name:"Ansh",
            class:"10"
        },
        {
            id:3,
            name:"Ayush",
            class:"10"
        },
        {
            id:4,
            name:"Ram",
            class:"10"
        },
        {
            id:5,
            name:"Amit",
            class:"10"
        }
    ]
    res.send(students);
})

app.get("/contact",(req,res)=>{
    res.send("<h1>My Phone no is  9876545678</h1>")
})
app.listen(port,()=>{
    console.log(`Server is running at port ${port}`)
})
