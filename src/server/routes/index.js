const logger = require('winston'); //logging, needs to be implemented in this file
const user = require("../models/user");

module.exports = (express, jwt) => {
  const router = express.Router();
  const secret = process.env.AUTH_SUPERSECRET || "supersecret";
  router.get("/api", (req, res)=>{//api health
      res.status(200).json({WebServiceStatus: "healthy"});
  });
  router.post("/api/v1/token", (req, res)=>{ //get token
    var username = req.body.name;
    // var password = req.body.password;

    user.authenticate(req.body,
      (err) => {
        logger.log("error", "Authencication error:" + err.message + "\n");
        res.status(500).send(err.message);

      },
      (data) => {
          if (data) {
            logger.log("info", "User authenticated:" + JSON.stringify(data) + "\n");
            var token = jwt.sign({username:username}, secret, {expiresIn: 360});
            res.send(token);
          } else {
              res.status(401).send("Access denied!");
          }
      });
  });

    // add API routes with prefix
  router.use('/api/v1', require('./api/student')(express, jwt));
  router.use('/api/v1', require('./api/user')(express, jwt));
  router.use('/api/v1', require('./api/enrollment')(express, jwt));

  return router;
};
