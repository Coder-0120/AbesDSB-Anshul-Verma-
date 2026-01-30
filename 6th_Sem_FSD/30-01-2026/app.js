
const fs=require("fs");


// write a file using fs module

// fs.writeFile("data.txt","Hello world ",(err)=>{
//     if(err){
//         console.log("error in writing in a file : ",err);
//     }
//     else{
//         console.log("file created successfully..");
//     }
// })

// read a file using fs module

// fs.readFile("data.txt","utf8",(err,data)=>{
//     if(err){
//         console.log("Error in reading a file",err);
//     }
//     else{
//         console.log("data is ",data);
//     }
// })

// append a file using fs module

// fs.appendFile("data.txt","I am Anshul",(err,data)=>{
//     if(err){
//         console.log("Error in append data",err);
//     }
//     else{
//         console.log("Append done in file");
//     }

// })

// to delete a file 
// fs.unlink("data.txt",(err)=>{
//     if(err){
//         console.log("Error in deleting file",err);
//     }
//     else{
//         console.log("file deleted");
//     }
// })

// to rename a file
// fs.rename("data.txt","newdata.txt",(err)=>{
//     if(err){
//         console.log("Error in rename file ",err);
//     }
//     else{
//         console.log("renamed file successfully..");
//     }
// })


// to move file to diff path
const path=require("path");
const targetpath="./moved";
const sourcepath="newdata.txt";

if(!fs.existsSync(targetpath)){
    fs.mkdirSync(targetpath);
}
fs.rename("newdata.txt",path.join(targetpath,sourcepath),(err)=>{
    if(err){
        console.log("error in moving file ");
    }
    else{
        console.log("moved successfully..");
    }

})