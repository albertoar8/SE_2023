let user = {
    name: "John",
    money: 1000,
  
    [Symbol.toPrimitive](hint) {
       console.log(`hint: ${hint}`);
    //   switch (hint){
    //       case "string":
    //           return this.name
    //           break;
    //       case "number":
    //           return this.money
    //     case "default":
    //         return this.money
    //   }
  
      return hint === "string" ? this.name : this.money;
      
    },
  };
  
 // console.log(user+500);//calling a default
  console.log(`${user}`); //calling a string
  console.log(user*2);//calling a number
  console.log(user+500)
  
  