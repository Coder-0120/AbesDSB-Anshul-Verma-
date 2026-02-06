const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        fs.readFile('index.html','utf8',(err,data)=>{
            if(err){
                res.statusCode=500;
                res.end('Internal Server Error');
            }else{
                res.setHeader('Content-Type','text/html');
                res.statusCode=200;
                res.end(data);
            }
        });
    }
    else if(req.url==='/about'){
        fs.readFile('about.html','utf-8',(err,data)=>{
            if(err){
                res.statusCode=500;
                res.end('Internal Server Error');
            }
            else{
                res.setHeader('Content-Type','text/html');
                res.statusCode=200;
                res.end(data);
            }
        })
    }
    else{
        res.statusCode=404;
        res.end('Page not found');
    }
        
});
server.listen(3000,()=>{
    console.log('Server is running on port 3000');
});