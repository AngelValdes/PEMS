// student routes
const logger = require("winston"); //logging
const user = require("../../models/user");//user repository
const db = require('../../models/db');

module.exports = (express, jwt) => {
    const router = express.Router();
    const secret = process.env.AUTH_SUPERSECRET || "supersecret";
    router.get("/users", (req, res) => {
        var token = req.query.token;
        //jwt.verify(token, secret, (err, decoded) => {
        if (1 === 1) { //authorized !err
            user.findAll(
                (err) => { // if error, log and return error status and message
                    logger.log("error", "All students read error:" + err.message + "\n");
                    res.status(500).send(err.message);
                },
                (data) => { // if success log and return status and data
                    logger.log("info", "All students read:" + JSON.stringify(data) + "\n");
                    res.status(200).json(data);
                });
        } else { //unauthorized
            res.status(401).send(err);
        }

    });

  // route: select one student by id
    router.get("/users/:id", (req, res) => {
        var token = req.query.token;
        var fullInfo = (req.query.fullInfo === "true");
        //jwt.verify(token, secret, (err, decoded)=>{
        if (1 === 1) { //authorized
            function error(err) {
              logger.log("error", "by id student read error:" + err.message + "\n");
              res.status(500).send(err.message);
            }
            function success(data) {
              logger.log("info", "by id student read:" + JSON.stringify(data) + "\n");
              res.status(200).json(data);
            }
            user.findById(req.params,error,success);
        } else { //unauthorized
            res.status(401).send(err);
        }
    });

    router.get("/users/:id/addresses", (req, res) => {
        var token = req.query.token;
        var fullInfo = (req.query.fullInfo === "true");
        //jwt.verify(token, secret, (err, decoded)=>{
        if (1 === 1) { //authorized
            function error(err) {
              logger.log("error", "by id student read error:" + err.message + "\n");
              res.status(500).send(err.message);
            }
            function success(data) {
              logger.log("info", "by id student read:" + JSON.stringify(data) + "\n");
              res.status(200).json(data);
            }
            user.getAddresses(req.params,error,success);
        } else { //unauthorized
            res.status(401).send(err);
        }
    });

    return router;
};
