/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('schools', {
    schoolId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    addressLine1: {
      type: "NCHAR",
      allowNull: true
    },
    addressLine2: {
      type: "NCHAR",
      allowNull: true
    },
    city: {
      type: "NCHAR",
      allowNull: true
    },
    state: {
      type: "NCHAR",
      allowNull: true
    },
    zipCode: {
      type: "NCHAR",
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'schools'
  });
};
