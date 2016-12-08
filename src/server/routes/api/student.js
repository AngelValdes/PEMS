// student routes
//const student = require("../../models/student");//student repository
const logger = require("winston"); //logging

module.exports = (express, jwt) => {
  const router = express.Router();
  /*const secret = process.env.AUTH_SUPERSECRET || "supersecret";
  // route: select all students
  router.get("/students", (req, res) => {
    var token = req.query.token;
    jwt.verify(token, secret, (err, decoded) => {
      if (!err) { //authorized
        student.findAll(
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
  });
  // route: select one student by id
  router.get("/students/:id", (req, res) => {
    var token = req.query.token;
    jwt.verify(token, secret, (err, decoded)=>{
      if(!err){ //authorized
        student.findById(req.params,
          (err) => {
            logger.log("error", "by id student read error:" + err.message + "\n");
            res.status(500).send(err.message);
          },
          (data) => {
            logger.log("info", "by id student read:" + JSON.stringify(data) + "\n");
            res.status(200).json(data);
          });
      }else{ //unauthorized
          res.status(401).send(err);
      }
    });
  });
  // route: insert new student
  router.post("/students", (req, res) => {
    jwt.verify(token, secret, (err, decoded)=>{
      if(!err){ //authorized
        student.create(req.body,
          (err) => {
            logger.log("error", "Creating student error:" + err.message + "\n");
            res.status(500).send(err.message);
          },
          (data) => {
            logger.log("info", "student created:" + JSON.stringify(data) + "\n");
            res.status(201).json(data);
          });
      }else{ //unauthorized
          res.status(401).send(err);
      }
    });
  });
  // route: update existing student
  router.put("/students/:id", (req, res) => {
    jwt.verify(token, secret, (err, decoded)=>{
      if(!err){ //authorized
        /* eslint no-param-reassign: 0 */ /*
        req.body.id = req.params.id; // recommended by instructor
        student.update(req.body,
          (err) => {
            logger.log("error", "Updating student error:" + err.message + "\n");
            res.status(500).send(err.message);
          },
          (data) => {
            logger.log("info", "student updated:" + JSON.stringify(data) + "\n");
            res.status(200).json(data);
          });
      }else{ //unauthorized
          res.status(401).send(err);
      }
    });
  });
  // route: remove existing student
  router.delete("/students/:id", (req, res) => {
    jwt.verify(token, secret, (err, decoded)=>{
      if(!err){ //authorized
        student.destroy(req.params,
          (err) => {
            logger.log("error", "Deleting student error:" + err.message + "\n");
            res.status(500).send(err);
          },
          (data) => {
            if (data === 1) {
              logger.log("info", "{ response: " + data + ", message:  id " +
              req.params.id + " deleted! }\n");
              res.status(200).send({ response: data,
                message: "id " + req.params.id + " deleted!" });
            } else {
              logger.log("info", "{ response: " + data + ", message:  id " +
              req.params.id + " not found in database }\n");
              res.status(202).send({ response: data,
                message: "id " + req.params.id + " not found in database!" });
            }
          });
      }else{ //unauthorized
          res.status(401).send(err);
      }
    });
  });*/

  return router;
};
