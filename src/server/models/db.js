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
}, {
      indexes: [ // Create a unique index on username
          {
              unique: true,
              fields: ['username']
          },
      ]
    }
);

const student = sequelize.define('student', { // define student model
  studentId: { type: Sequelize.INTEGER, primaryKey: true, references: { model: 'users', key: 'userId' } },
  grade: Sequelize.TEXT
});

const userType = sequelize.define('userType', { // define userType model
  userTypeId: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: Sequelize.STRING, allowNull: false },
  description: Sequelize.TEXT
},
  {
    timestamps: false
  }
);
/*


const school = sequelize.define('school', { // define school model
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: Sequelize.STRING, allowNull: false },
  address: Sequelize.STRING,
  city: Sequelize.STRING,
  state: Sequelize.STRING,
  zipCode: Sequelize.STRING,
  phone: Sequelize.STRING
});

const bus = sequelize.define('bus', { // define bus model
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  Number: { type: Sequelize.STRING, allowNull: false },
  routeNumber: Sequelize.STRING,
  pickupTime: Sequelize.STRING,
  stopLocation: Sequelize.STRING
});

const enrollment = sequelize.define('enrollment', { // define enrollment model
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  room: Sequelize.STRING,
  time: Sequelize.STRING,
  absences: Sequelize.INTEGER,
  comments: Sequelize.STRING
});

const course = sequelize.define('course', { // define course model
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: Sequelize.STRING, allowNull: false },
  electronicBook: Sequelize.STRING
});

const teacher = sequelize.define('teacher', { // define teacher model
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  certificationArea: Sequelize.STRING
});*/

//Entities relationships (hasOne, belongsTo, hasMany, belongsToMany, references )
user.belongsToMany(userType, {through: 'UserToUserType', foreignKey: 'userId'});
userType.belongsToMany(user, {through: 'UserToUserType', foreignKey: 'userTypeId'});


sequelize.sync()
  .then(() => {
      logger.log("info", "All models are synchronized\n");
    })
    .catch(() => {
      logger.log("error", "Model synchronization error: " + error + "\n");
    });

exports.sequelize = sequelize;
exports.user = user;
exports.student = student;
exports.userType = userType;

