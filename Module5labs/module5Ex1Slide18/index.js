const express = require("express");
const app = express(); // app will be an instance of a web server
const port = 3000; // app will be available through port 3000 (of localPC)

const app2 = express(); //app2 will be a seconde web server
const port2 = 8080; //app2 will be available through port 8080 (ofLocal PC)

//What is app ? typeof 
console.log(typeof app); //app is a function
console.log(app); //app is a function

//                                                  Excersice 1 is solved by creatin 2 instances of express (const app = express();) in line 2
//                                                  other 
// APP 1 ---------------------
app.get("/", (req, res) => {
  res.send("HellO WORLD!");
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
app.get("/test", (req, res) => {
  res.send("This is a test");
});


//APP 2 ----------------------------
app2.get("/", (req, res) => {
    res.send("HellO WORLD 2!");
  });
  app2.listen(port2, () => {
    console.log(`Example app listening at http://localhost:${port2}`);
  });
  app2.get("/test", (req, res) => {
    res.send("This is a test2");
  });
  