function myFunction(){
  console.log("starting a task .....");
  setTimeout(()=>{

      let sum=0;
      for(let i=0;i<1000000000;i++){
          sum+=i;
        }
        console.log("task finised");
        console.log("Result:",sum);
    },0);
}

console.log("Before calling the function call");
let result=myFunction();
console.log("After the function call");
