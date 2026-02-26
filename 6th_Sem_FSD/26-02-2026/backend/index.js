const express=require('express');
const app=express();
const port=5000;
app.use(express.json());
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

 // to get all the books
app.get("/api/books",(req,res)=>{
    res.send(books);
})

// to get book by particular id 
app.get("/api/books/:id",(req,res)=>{
    const id=parseInt(req.params.id);
    const book=books.find((b)=>b.id==id);
    if(book){
        res.send(book);
    }
    else{
        res.status(404).json({message:"Book not found"});
    }
    
})

let users=[
    {
        user_id:1,
        name:"Anshul",
        age:20
    },
    {
        user_id:2,
        name:"Aman",
        age:22
    },
    {
        user_id:3,
        name:"Arpit",
        age:18
    }

];


 // to get all the users
app.get("/api/users",(req,res)=>{
    res.send(users);
})

// to get user by particular user_id 
app.get("/api/users/:id",(req,res)=>{
    const id=parseInt(req.params.id);
    const user=users.find((u)=>u.user_id==id);
    if(user){
        res.send(user);
    }
    else{
        res.status(404).json({message:"user not found"});
    }
    
})

// to add new user
app.post('/api/users', (req, res) => {
  const newUser={
    user_id: users.length + 1,
    name: req.body.name,
    age: req.body.age,
  };
  users.push(newUser);
  return res.status(201).json(newUser);
});

// to update user by particular user_id
app.put('/api/users/:id', (req, res) => {
  const user=users.find(u => u.user_id === parseInt(req.params.id));
  if(!user) return res.status(404).json({ message: "User not found" });
  user.name=req.body.name;
  user.age=req.body.age;
  res.json(user);
});

// to delete any user by particular user_id
app.delete("/api/users/delete/:id",(req,res)=>{
    const user=users.find(u=>u.user_id===parseInt(req.params.id));
    if(!user){
        return res.status(404).json({message:"user not found"});
    }
    users=users.filter(u=>u.user_id!==parseInt(req.params.id));
    res.json({message:"user deleted successfully",user:user});
})

app.listen(port,()=>{   
    console.log(`Server is running on ${port} `);

})