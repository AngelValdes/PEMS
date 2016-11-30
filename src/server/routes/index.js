module.exports = (express, jwt)=>{
  const router = express.Router();
  const secret = process.env.AUTH_SUPERSECRET || "supersecret";
  router.get("/api", (req, res)=>{
      res.status(200).json({WebServiceStatus: "healthy"});
  });
  router.post("/token", (req, res)=>{
    var username = req.body.name;
    var password = req.body.password;
    //authenticate user
    if((username==="student1" || username==="student2") && password==="123"){
      var token = jwt.sign({username:username}, secret, {expiresIn: 360});
      res.send(token);
    }else{
      res.redirect("#/login");
    }
  });
  router.get("/api/students", (req, res)=>{
    var students = [
      {
        "id": 0, "first": "Student0", "last": "Valdes", "address": "21387 SW 23rd Ave", "city": "Miami", "state": "FL", "zipCode": "33173", "phone": "3059876765",
        "school":
        { "schoolNumber": "7841", "schoolName": "Bradoth Middle", "address": "1234 SW 32nd Ave", "city": "Miami", "state": "FL", "phone": "3056573654" },
        "busInformation":
        { "routeNumber": "101", "busNumber": "1309", "pickupTime": "6:30am", "stopLocation": "1234 SW and 30th Ave" },
        "enrollments": [
          { "id": 0, "title": "Math level 1", "electronicBook": "Math Basics", "room": "D4", "time": "8:00am - 9:15am", "absences": 2, "comments": "Good effort!", "teacherName": "Jorge Martinez", "teacherEmail": "jorge@mylearningdoor.com" },
          { "id": 1, "title": "Reading", "electronicBook": "Reading Basic", "room": "E3", "time": "9:15am - 10:15am", "absences": 1, "comments": "Good effort!", "teacherName": "Maria Martinez", "teacherEmail": "maria@mylearningdoor.com" },
          { "id": 2, "title": "History", "electronicBook": "Roman Empire 1", "room": "C2", "time": "10:30am - 11:30am", "absences": 0, "comments": "Bad effort!", "teacherName": "Luisa Fuentes", "teacherEmail": "luisa@mylearningdoor.com" }
        ]
      },
      {
        "id": 1, "first": "Student1", "last": "Valdes", "address": "11387 SW 23rd Ave", "city": "Miami", "state": "FL", "zipCode": "33171", "phone": "3051116765",
        "school":
        { "schoolNumber": "7111", "schoolName": "Normanday High", "address": "111 SW 32nd Ave", "city": "Miami", "state": "FL", "phone": "3051113654" },
        "busInformation":
        { "routeNumber": "102", "busNumber": "1311", "pickupTime": "6:30am", "stopLocation": "111 SW and 30th Ave" },
        "courses": [
          { "id": 0, "title": "Math level 3", "electronicBook": "Math Calculus", "room": "D4", "time": "8:00am - 9:15am", "absences": 0, "comments": "Good effort!", "teacherName": "Jorge Martinez", "teacherEmail": "jorge@mylearningdoor.com" },
          { "id": 1, "title": "Reading Advanced", "electronicBook": "Reading Advanced", "room": "E3", "time": "9:15am - 10:15am", "absences": 0, "comments": "Good effort!", "teacherName": "Maria Martinez", "teacherEmail": "maria@mylearningdoor.com" },
          { "id": 2, "title": "History Adv", "electronicBook": "Atlantis", "room": "C2", "time": "10:30am - 11:30am", "absences": 0, "comments": "Excellent effort!", "teacherName": "Luisa Fuentes", "teacherEmail": "luisa@mylearningdoor.com" }
        ]
      }
    ];
    var token = req.query.token;
    jwt.verify(token, secret, (err, decoded) => {
      if (!err) {
        res.status(200).json(students);
      } else {
        res.send(err);
      }
    });
  });
  return router;
};