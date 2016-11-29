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
    timestamps: true // true by default
  }
});

// ORM Entities Models and UnitOfWork
const user = sequelize.define('user', { // define user model
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  username: { type: DataTypes.STRING, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
  first: DataTypes.STRING,
  last: DataTypes.STRING,
  dob: DataTypes.DATE
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
  address: DataTypes.STRING,
  city: DataTypes.STRING,
  state: DataTypes.STRING,
  zipCode: DataTypes.STRING,
  phone: DataTypes.STRING
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