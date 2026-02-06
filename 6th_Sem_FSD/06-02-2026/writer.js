const fs=require('fs').promises;

async function writeFileExample(){
  try{
    await fs.writeFile('myfile2.txt','Hello, this is a sample text file.','utf8');
    const data={name:'Anshul',age:21,city:'Hapur'};
    await fs.writeFile('data.json',JSON.stringify(data,null,2),'utf8');
    console.log('Files created successfully.');
  }catch(err){
    console.error('Error writing files:',err);
  }
}

writeFileExample();
