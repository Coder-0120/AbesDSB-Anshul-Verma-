function dosomething(){
    throw new Error('a error is thrown from dosomething');
}
function init(){
    try{
        dosomething();
    }
    catch(e){
        console.log(e);
    }
    console.log("After successful error handling");
}
init();