const express=require('express');
const app=express();
const port=5000;

let books=[
    {
        id:1,
        name:"Maths",
        author:"Rd Sharma"
    },
    {
        id:2,
        name:"Scince",
        author:"Anshul"
    },
    {
        id:1,
        name:"CS",
        author:"Ayush"
    }

];

app.get("/api/books",(req,res)=>{
    res.send(books);
})
app.listen(port,()=>{   
    console.log(`Server is running on ${port} `);

})