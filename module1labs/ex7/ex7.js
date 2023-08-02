// Declare functions with common operators
function addition(a,b){
    return a+b-1;
}

//test
if (addition(1,1)!=2){
    //throw error;
    console.log("something is wrong with the function: Addition ")
}else{
    console.log("Function working as expected")
}