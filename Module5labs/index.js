const express = require("express");
const cors = require("cors");

const app = express(); // app will be an instance of a web server
const port = 3000; // app will be available through port 3000 (of localPC)

const app2 = express(); //app2 will be a seconde web server
const port2 = 8080; //app2 will be available through port 8080 (ofLocal PC)

const calculatorRoute = require("./routers/router.js");
//What is app ? typeof
//app is a function
app.use(cors());
//                                                  Excersice 1 is solved by creatin 2 instances of express (const app = express();) in line 2
//                                                  other
// APP 1 ---------------------
// app.get("/", (req, res) => {
//   res.send("HellO WORLD!");
// });
// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });
// app.get("/test", (req, res) => {
//   res.send("This is a test");
// });

//APP 2 ----------------------------
// app2.get("/", (req, res) => {
//   res.send("HellO WORLD 2!");
// });
// app2.listen(port2, () => {
//   console.log(`Example app listening at http://localhost:${port2}`);
// });
// app2.get("/test", (req, res) => {
//   res.send("This is a test2");
// });

//EXCERSICE 2 SLIDE 36
//app.use("/test2", express.static("public"));
app.use("/calculator", calculatorRoute);
app.get("/", (req, res) => { //testing we can send objects 
  res.send({
    status: true,
    data: [
      {
        id: 0,
        location: "Melbourne",
        population: 4500000,
      },
      {
        id: 1,
        location: "Sydney",
        population: 5000000,
      },
    ],
    message: "Getting city data succesfully",
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
