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
    idle: 10000
  },
  define: {
    timestamps: true
  }
});

// ORM Entities Models and UnitOfWork
const user = sequelize.define('user', { // define user model
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  username: { type: DataTypes.STRING, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
  first: DataTypes.STRING,
  last: DataTypes.STRING,
  dob: DataTypes.DATE,
  email: DataTypes.STRING,
  address: DataTypes.STRING,
  city: DataTypes.STRING,
  state: DataTypes.STRING,
  zipCode: DataTypes.STRING,
  phone: DataTypes.STRING
});

const userType = sequelize.define('userType', { // define userType model
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  description: DataTypes.TEXT
},
  {
    timestamps: false
  }
);

const student = sequelize.define('student', { // define student model
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  grade: DataTypes.TEXT
});

const school = sequelize.define('school', { // define school model
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  address: DataTypes.STRING,
  city: DataTypes.STRING,
  state: DataTypes.STRING,
  zipCode: DataTypes.STRING,
  phone: DataTypes.STRING
});

const bus = sequelize.define('bus', { // define bus model
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  Number: { type: DataTypes.STRING, allowNull: false },
  routeNumber: DataTypes.STRING,
  pickupTime: DataTypes.STRING,
  stopLocation: DataTypes.STRING
});

const enrollment = sequelize.define('enrollment', { // define enrollment model
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  room: DataTypes.STRING,
  time: DataTypes.STRING,
  absences: DataTypes.INTEGER,
  comments: DataTypes.STRING
});

const course = sequelize.define('course', { // define course model
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  electronicBook: DataTypes.STRING
});

const teacher = sequelize.define('teacher', { // define teacher model
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  certificationArea: DataTypes.STRING
});

// Entities relationships (pending)
user.hasOne(userType, { foreignKey: 'userTypeId' });
student.belongsTo(user, { foreignKey: 'userId' });


sequelize.sync()
    .then(() => {
      // logger.debug('All models are synchronized\n', 0);
    })
    .catch(() => {
      // logger.debug('Model synchronization error: ' + error + '\n', 2);
    });

exports.sequelize = sequelize;
exports.user = user;
exports.student = student;

