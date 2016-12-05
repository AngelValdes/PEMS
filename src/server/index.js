require('dotenv').config();
const winston = require('winston');
winston.add(winston.transports.File, { filename: "server.log" });
const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const port = process.env.ENV_PORT || 5000;
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(__dirname + "/../client"));
app.use(express.static(__dirname + "/../../node_modules"));
app.use("/", require("./routes")(express, jwt));

app.listen(port, ()=>{winston.log('info', "server running on port " + port);});
module.exports = app;
