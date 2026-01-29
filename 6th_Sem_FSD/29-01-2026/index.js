const http=require('http');
const Server=http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    res.end('Hello World\n');
})

Server.listen(3000, ()=>{
    console.log('Server running at http://localhost:3000/');
});