let express = require("express");
let app = express();
let dbConnect = require("./dbConnect");
dbConnect.connectMysql();
const cors = require('cors')

const userRoutes = require("./routers/userRoutes");
const port = process.env.PORT || 8080;
app.use(cors())
app.use(express.json());

//Set Router
app.use("/api/user", userRoutes);

app.listen(port, () => {
  console.log("Listening on port ", port);
});
