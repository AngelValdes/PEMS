const logger = require('winston'); //logging, needs to be implemented in this file

module.exports = (express, jwt) => {
  const router = express.Router();
  const secret = process.env.AUTH_SUPERSECRET || "supersecret";
  router.get("/api", (req, res)=>{//api health
      res.status(200).json({WebServiceStatus: "healthy"});
  });
  router.post("/token", (req, res)=>{ //get token
    var username = req.body.name;
    var password = req.body.password;
    if((username==="student1" || username==="student2") && password==="123"){ //authenticate user
      var token = jwt.sign({username:username}, secret, {expiresIn: 360});
      res.send(token);
    }else{
      res.status(401).send("Unauthorized!");
    }
  });

    // add API routes with prefix
  router.use('/api/v1', require('./api/student')(express, jwt));

  return router;
};
