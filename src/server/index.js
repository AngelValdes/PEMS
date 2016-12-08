require('dotenv').config(); //read .env variables
const winston = require('winston'); //logging
winston.add(winston.transports.File, { filename: "server.log" }); //logging to console & file
const express = require("express");
const jwt = require("jsonwebtoken"); //token authentication & authorazation
const app = express();
const cors = require('cors');//support CORS (Cross Origin)
const port = process.env.ENV_PORT || 5000;
const bodyParser = require("body-parser"); //read body from post
app.use(function(err,req,res,next){ // Error handler
  winston.log("error", err.message);
  res.status(err.status || 500).json(err.message); //change to display error page
});
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(__dirname + "/../client")); // allow static content
app.use(express.static(__dirname + "/../../node_modules"));
app.use("/", require("./routes")(express, jwt)); //add routes

app.listen(port, ()=>{winston.log("info", "server running on port " + port);});
module.exports = app;
