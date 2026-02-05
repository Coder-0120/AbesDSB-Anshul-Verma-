function myFunction(){
  console.log("starting a task .....");
  let sum=0;
  for(let i=0;i<1000000000;i++){
    sum+=i;
}
  console.log("task finised");
  return sum;
}

console.log("Before calling the function call");
let result=myFunction();
console.log("After the function call");
console.log("Result:",result);