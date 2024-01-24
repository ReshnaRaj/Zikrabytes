const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const cors=require('cors')
require("dotenv").config();

const addrouter=require('./route')
mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    console.log("Database is connected");
  })
  .catch((err) => {
    console.log(err);
  });
  app.listen(4001, () => {
    console.log("server  is running on port 4001");
  });

app.use(cors({
    origin:"*",
    methods:['POST','GET'],
    credentials:true
}))


app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use("/",addrouter );
