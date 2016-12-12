// npm i --save sequelize -> ORM
// npm i --save mysql2 -> connect to mysql database
// npm i --save sqlite3 -> connect to sqllite
// npm i --save tedious -> connect to mssql
// npm i -g sequelize-auto -> to reverse engineer an existing database
// sequelize-auto -o "./src/server/models/auto" -d pems -h localhost -u pemsUser -p 1433 -x pemsPass -e mssql
const logger = require('winston'); //logging

const Sequelize = require('sequelize');

// configure connection to database
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: process.env.DB_SCHEMA,
  logging: false,
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
  define: {
    timestamps: false, // true by default
  },
});

// ORM Entities Models and UnitOfWork
const user = sequelize.define('user', { // define user model
  userId: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  username: { type: Sequelize.STRING, allowNull: false },
  password: { type: Sequelize.STRING, allowNull: false },
  first: Sequelize.STRING,
  last: Sequelize.STRING,
  dob: Sequelize.DATE,
  email: Sequelize.STRING,
  address: Sequelize.STRING,
  city: Sequelize.STRING,
  state: Sequelize.STRING,
  zipCode: Sequelize.STRING,
  phone: Sequelize.STRING
},
{
  tableName: 'users'
},
{
  indexes: [ // Create a unique index on username
    {
        unique: true,
        fields: ['username']
    }
  ]
}
);

const student = sequelize.define('student', { // define student model
  studentId: { type: Sequelize.INTEGER, primaryKey: true, references: { model: 'users', key: 'userId' } },
  grade: Sequelize.TEXT
},
{
  tableName: 'students'
}
);

const userType = sequelize.define('userType', { // define userType model
  userTypeId: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: Sequelize.STRING, allowNull: false },
  description: Sequelize.TEXT
},
{
  timestamps: false
},
{
  tableName: 'userTypes'
}
);

const usersToUserTypes = sequelize.define('usersToUserTypes', { //
  userTypeId: { type: Sequelize.INTEGER, references: {model: 'userTypes',key: 'userTypeId'} },
  userId: { type: Sequelize.INTEGER, references: { model: 'users', key: 'userId' } }
},
{
  timestamps: false
},
{
  tableName: 'usersToUserTypes'
}
);

const school = sequelize.define('school', { // define school model
  schoolId: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: Sequelize.STRING, allowNull: false },
  addressLine1: { type: "NCHAR", allowNull: true },
  addressLine2: { type: "NCHAR", allowNull: true },
  city: { type: "NCHAR", allowNull: true },
  state: { type: "NCHAR", allowNull: true },
  zipCode: { type: "NCHAR", allowNull: true },
  phone: Sequelize.STRING
},
{
  tableName: 'schools'
}
);

const course = sequelize.define('course', { // define course model
  courseId: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: Sequelize.STRING, allowNull: false },
  electronicBook: Sequelize.STRING
},
{
  tableName: 'courses'
}
);

const teacher = sequelize.define('teacher', { // define teacher model
  teacherId: { type: Sequelize.INTEGER, primaryKey: true,  references: {model: 'users', key: 'userId'} },
  certificationArea: Sequelize.STRING
},
{
  tableName: 'teachers'
}
);

const address = sequelize.define('address', { // define address model
    schoolId: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: Sequelize.STRING, allowNull: false },
    addressLine1: { type: "NCHAR", allowNull: true },
    addressLine2: { type: "NCHAR", allowNull: true },
    city: { type: "NCHAR", allowNull: true },
    state: { type: "NCHAR", allowNull: true },
    zipCode: { type: "NCHAR", allowNull: true },
    userId: { type: Sequelize.INTEGER, allowNull: true, references: { model: 'users', key: 'userId' }
    }
},
{
  tableName: 'addresses'
}
);

const enrollment = sequelize.define('enrollment', { // define enrollment model
  enrollmentId: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  room: { type: Sequelize.STRING, allowNull: true },
  time: { type: Sequelize.STRING, allowNull: true },
  absences: { type: Sequelize.INTEGER, allowNull: true },
  comments: { type: Sequelize.STRING, allowNull: true },
  studentId: { type: Sequelize.INTEGER, allowNull: true, references: { model: 'students', key: 'studentId' } },
  schoolId: { type: Sequelize.INTEGER, allowNull: true, references: { model: 'schools', key: 'schoolId' } },
  courseId: { type: Sequelize.INTEGER, allowNull: true, references: { model: 'courses', key: 'courseId' } },
  teacherId: { type: Sequelize.INTEGER, allowNull: true, references: { model: 'teachers', key: 'teacherId' } }
},
{
  tableName: 'enrollments'
}
);

//Entities relationships (hasOne, belongsTo, hasMany, belongsToMany, references )
//user.hasMany(address);
//user.belongsToMany(userType, {through: 'usersToUserTypes', foreignKey: 'userId'});
//userType.belongsToMany(user, { through: 'usersToUserTypes', foreignKey: 'userTypeId' });
//student.hasOne(user);
//teacher.hasOne(user);

//enrollment.hasOne(student);
//student.belongsToMany(enrollment, {through: 'enrollment', foreignKey: 'studentId'});
//enrollment.hasOne(school);
//school.belongsToMany(enrollment, {through: 'enrollment', foreignKey: 'schoolId'});
//enrollment.hasOne(course);
//course.belongsToMany(enrollment, {through: 'enrollment', foreignKey: 'courseId'});
//enrollment.hasOne(teacher);
//teacher.belongsToMany(enrollment, {through: 'enrollment', foreignKey: 'teacherId'});

sequelize.sync()
  .then(() => {
      logger.log("info", "All models are synchronized\n");
    })
    .catch((error) => {
      logger.log("error", "Model synchronization error: " + error + "\n");
    });

exports.sequelize = sequelize;
exports.user = user;
exports.student = student;
exports.userType = userType;
exports.school = school;
exports.course = course;
exports.teacher = teacher;
exports.enrollment = enrollment;

