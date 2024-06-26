var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var cors = require("cors");
const bcryptjs = require("bcryptjs");
const PORT = 3000;
const app = express();
const MONGO_DB = "mongodb://localhost:27017/userDatabase";

//Middleware
app.use(cors());
app.use(express.json());
mongoose.connect(MONGO_DB);
const db = mongoose.connection;
db.on("error", (err) => {
  console.error("Mongodb Connection error", err);
});
db.once("open", () => {
  console.log("MongoDb connected");
});

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});
const User = mongoose.model("user", userSchema);

const userRegisterSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  address: String,
  city: String,
  pincode: String,
  country: String,
  state: String,
});
const UserRegister = mongoose.model("userregister", userRegisterSchema);

app.post("/login", async (req, res) => {
  try {
    const hasspassword = await bcryptjs.hashSync(req.body.password, 10);
    const newUser = new User({
      email: req.body.email,
      password: hasspassword,
    });
    const saveUser = await newUser.save();
    res.status(200).json(saveUser);
  } catch (error) {
    console.error("Error during login", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/register", async (req, res) => {
  try {
    const hasspassword = await bcryptjs.hashSync(req.body.password, 10);
    const newRegisterUser = new UserRegister({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hasspassword,
      address: req.body.address,
      city: req.body.city,
      pincode: req.body.pincode,
      country: req.body.country,
      state: req.body.state,
    });
    const saveRegisterUser = await newRegisterUser.save();
    res.status(200).json(saveRegisterUser);
  } catch (error) {
    console.error("Error during Register", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
app.listen(PORT);
