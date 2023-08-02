require("dotenv").config();
const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnection");
const sequelizeInstance = dbConnect.Sequelize;

const mysql = require("mysql2");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class user extends Model {}
//Sequelize will create this table if it doesn't exist on
//startup;
user.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: { type: DataTypes.STRING, allowNull: false, required: true },
    lastName: { type: DataTypes.STRING, allowNull: false, required: true },
    emailId: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
      unique: true,
    },
    password: { type: DataTypes.STRING, allowNull: false, required: true },
    role: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "user",
    timestamps: true,
    freezeTableName: true,
  }
);

async function createUsers(req, res) {
  try {
    const encryptedpassword = await bcrypt.hash(req.password, 10);
    const testcreatingnewuser = await user.create({
      firstName: req.firstName,
      lastName: req.lastName,
      emailId: req.email,
      password: encryptedpassword,
    });
  } catch (err) {
    console.log(err);
  }
}

async function loginUser(req, res) {
  try {
    const email = req.email;
    console.log(email)
    const user = await user.findOne({ where: { emailId: email } });
if (project === null) {
  console.log('Not found!');
} else {
  console.log(project instanceof Project); // true
  console.log(project.title); // 'My Title'
}

    // const sql = mysql.format(`SELECT * FROM users WHERE email = ?`, email);

    // connection.query(sql, async (err, result) => {
    //   if (err) {
    //     console.log(err);
    //   } else {
    //     if (result.length > 0) {
    //       console.log("Found a user:");
    //       console.log(result);
    //       const user = result[0];

    //       if (await bcrypt.compare(req.password, user.password)) {
    //         console.log("Login success!");
    //         const token = jwt.sign(
    //           {
    //             user_id: user.user_id,
    //             username: user.username,
    //             email: req.email,
    //           },
    //           process.env.JWT_KEY,
    //           { expiresIn: "7d" }
    //         );

    //         res.cookie("token", token, { httpOnly: true });
    //         res
    //           .status(200)
    //           .json({ user_id: user.user_id, username: user.username });
    //       } else {
    //         res.status(400).send("Password incorrect!");
    //       }
    //     } else {
    //       res.status(400).send("Email does not exist!");
    //     }
    //   }
    // });
  } catch (err) {
    res.status(500).send("Server error! Request failed!");
    console.log(err);
  }
}

module.exports = {
  user,
  createUsers,
  loginUser,
};
