const dbConnect = require("./dbConnect");
const express = require("express");
const app = express();
require("dotenv").config();

// parse requests of content-type -application / json;
app.use(express.json());

/*--when  userRoutes is created, we add these:--------------------*/
let userRoutes = require('./routes/userRoutes')
app.use('/api/users', userRoutes)

let postRoutes = require('./routes/postRoutes')
app.use('/api/posts', postRoutes)



app.get("/", (req, res) => {
  console.log(res);
  res.json({ message: "Welcome to my MongoDB application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


