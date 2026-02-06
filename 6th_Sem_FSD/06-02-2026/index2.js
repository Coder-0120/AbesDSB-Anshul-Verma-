const fs = require('fs').promises;

// async function readFileExample() {
//     try {
//         const data = await fs.readFile('myfile.txt', 'utf8');
//         console.log('File content:', data);
//     } catch (err) {
//         console.error('Error reading file:', err);
//     }
// }

// readFileExample();

// Or with util.promisify (Node.js 8.0.0+)
const { promisify } = require('util');
const readFileAsync = promisify(require('fs').readFile);

async function readWithPromisify() {
   try {
        const data = await readFileAsync('myfile.txt', 'utf8');
        console.log('File content:', data);
    } catch (err) {
        console.error('Error reading file:', err);
    }
}

readWithPromisify();

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