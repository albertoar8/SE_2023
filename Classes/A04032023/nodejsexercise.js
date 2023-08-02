function calc(operation,a,b){
    switch (operation){
        case '+':
            return a+b; 
        case '-':
            return a-b; 
        case '*':
            return a*b;
        case '/':
            return a/b;
        default:
            console.log("sorry, wrong input");
            break;
    }
}
console.log(calc("*",312,85));
