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
  username: { type: Sequelize.STRING(10), allowNull: false, primaryKey: true },
  password: { type: Sequelize.STRING(50), allowNull: false },
  first: Sequelize.STRING(30),
  last: Sequelize.STRING(30),
  dob: Sequelize.DATE,
  email: Sequelize.STRING(100),
  phone: Sequelize.STRING(10),
  MainLocationNumber: Sequelize.STRING(4)
},
{
  tableName: 'users'
},
{
  indexes: [ // Create a unique index on username
    {
        unique: true,
        fields: ['last']
    }
  ]
}
);

const student = sequelize.define('student', { // define student model
  username: { type: Sequelize.STRING(10), primaryKey: true, references: { model: 'users', key: 'username' } },
  gradeLevel: Sequelize.STRING(50),
},
{
  tableName: 'students'
}
);

const userType = sequelize.define('userType', { // define userType model
  userTypeId: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: Sequelize.STRING(50), allowNull: false },
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
  username: { type: Sequelize.STRING(10), references: { model: 'users', key: 'username' } }
},
{
  timestamps: false
},
{
  tableName: 'usersToUserTypes'
}
);

const school = sequelize.define('school', { // define school model
  schoolNumber: { type: Sequelize.STRING(4), primaryKey: true },
  name: { type: Sequelize.STRING(100), allowNull: false },
  addressLine1: { type: Sequelize.STRING(100), allowNull: true },
  addressLine2: { type: Sequelize.STRING(100), allowNull: true },
  city: { type: Sequelize.STRING(50), allowNull: true },
  state: { type: Sequelize.STRING(2), allowNull: true },
  zipCode: { type: Sequelize.STRING(5), allowNull: true },
  phone: Sequelize.STRING(10)
},
{
  tableName: 'schools'
}
);

const course = sequelize.define('course', { // define course model
  courseId: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: Sequelize.STRING(100), allowNull: false },
  electronicBook: Sequelize.STRING(100)
},
{
  tableName: 'courses'
}
);

const teacher = sequelize.define('teacher', { // define teacher model
  username: { type: Sequelize.STRING(10), primaryKey: true,  references: {model: 'users', key: 'username'} },
  certificationArea: Sequelize.STRING(20)
},
{
  tableName: 'teachers'
}
);

const address = sequelize.define('address', { // define address model
    name: { type: Sequelize.STRING(50), allowNull: false },
    addressLine1: { type: Sequelize.STRING(100), allowNull: true },
    addressLine2: { type: Sequelize.STRING(100), allowNull: true },
    city: { type: Sequelize.STRING(50), allowNull: true },
    state: { type: Sequelize.STRING(2), allowNull: true },
    zipCode: { type: Sequelize.STRING(5), allowNull: true },
    ownerId: { type: Sequelize.STRING(10), allowNull: true
    }
},
{
  tableName: 'addresses'
}
);

const enrollment = sequelize.define('enrollment', { // define enrollment model
  enrollmentId: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  room: { type: Sequelize.STRING(25), allowNull: true },
  time: { type: Sequelize.STRING(50), allowNull: true },
  absences: { type: Sequelize.INTEGER, allowNull: true },
  comments: { type: Sequelize.STRING(50), allowNull: true },
  studentId: { type: Sequelize.STRING(10), allowNull: true, references: { model: 'students', key: 'username' } },
  schoolId: { type: Sequelize.STRING(4), allowNull: true, references: { model: 'schools', key: 'schoolNumber' } },
  courseId: { type: Sequelize.INTEGER, allowNull: true, references: { model: 'courses', key: 'courseId' } },
  teacherId: { type: Sequelize.STRING(10), allowNull: true, references: { model: 'teachers', key: 'username' } }
},
{
  tableName: 'enrollments'
}
);

//Entities relationships (hasOne, belongsTo, hasMany, belongsToMany, references )
//student.belongsTo(user);
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

