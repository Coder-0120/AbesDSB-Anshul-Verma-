const express=require('express');
const port=5000;
const app=express();
const cors=require("cors");
app.use(express.json());
// app.use(cors());
//create array to store the data.
const students=[
    {
        id:1,
        name:"Anshul Verma",
        class:"12"
    }
];

// 1st route for getting data of students..
app.get("/",(req,res)=>{
    try{
        res.status(200).json({
            message:"fetched all students...",
            data:students
        })
    }
    catch(err){
        res.status(500).json({
            message:'error in fetching data of students...',
            error:err.message

        })

    }
})

// search data for student route
app.get("/:id",(req,res)=>{
    try{
        const id =req.params.id;
        const student=students.find(s=>s.id);
        if(!student){
            return res.status(404).json({
                message:'student not found ',
            })
        }
        return res.status(201).json({
            message:"student found..",
            data:student

        })
    }
    catch(err){
        return res.status(500).json({
            message:"error in found students..",
            error:err.message
        })
    }
})

// create data 
app.post("/add",(req,res)=>{
    try{
        const newstudent={
            id:students.length+1,
            ...req.body
        }
        students.push(newstudent);
        return res.status(201).json({
            message:"successfully add new student"
        })
    }
    catch(err){
        return res.status(500).json({
            message:"error in adding data",
            error:err.message
        })
    }
})

app.listen(port,()=>{
    console.log(`sever running at port ${port}`);
})