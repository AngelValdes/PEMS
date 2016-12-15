// mocked data
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
      }

    ];

const db = require('./db'); // unit of work
// getAll including relations
exports.findAll = (err, success) => {
  db.student.findAll({ include: [{ all: true, nested: true }]}).then(success).catch(err); //
};
// getById including relations
exports.findById = (payload, err, success) => {
  db.student.find({
    where: {
      username: payload.id
    },
    include: [ // include relations, even deeper multilevel
            { all: true, nested: true },
    ]
  }).then(success).catch(err);
};

exports.findByIdFullInfo = (payload, err, success) => {
  db.sequelize.query(
    "SELECT u.*, st.gradeLevel, sc.[name] AS mainLocationName, sc.addressLine1 AS mainLocationAddressLine1,	sc.addressLine2 AS mainLocationAddressLine2, sc.city AS mainLocationCity, sc.[state] AS mainLocationState, sc.zipCode AS mainLocationZipCode, sc.phone AS mainLocationPhone FROM students st INNER JOIN users u ON st.username = u.username LEFT JOIN schools sc ON u.MainLocationNumber = sc.schoolNumber WHERE st.username = :username",
    { replacements: { username: payload.id }, type: db.sequelize.QueryTypes.SELECT }
  )
    .then(success).catch(err);
};
exports.getEnrollments = (payload, err, success) => {
  db.sequelize.query(
    "SELECT en.* , co.courseId, co.title AS CourseTitle, u.first AS TeacherFirst, u.last AS TeacherLast FROM enrollments en LEFT JOIN courses co ON en.courseId = co.courseId LEFT JOIN teachers te ON en.teacherId = te.username LEFT JOIN users u ON en.teacherId = u.username WHERE en.studentId = :username",
    { replacements: { username: payload.id }, type: db.sequelize.QueryTypes.SELECT }
  )
    .then(success).catch(err);
};
// insert new, needs to resolve fact that info is in user and sutdent table
exports.create = (payload, err, success) => {
  db.student.create(payload).then(success).catch(err);
};
// modify existing, needs to resolve fact that info is in user and sutdent table
exports.update = (payload, err, success) => { // investigate Object.assign(entityObject, req.body)
  db.student.find({
    where: {
      username: payload.id
    },
  }).then((data) => {
    data.updateAttributes(payload).then(success).catch(err);
  }).catch(err);
};
// delete existing, needs to resolve fact that info is in user and sutdent table
exports.destroy = (payload, err, success) => {
  db.student.destroy({
    where: {
      username: payload.id
    },
  }).then(success).catch(err);
};
