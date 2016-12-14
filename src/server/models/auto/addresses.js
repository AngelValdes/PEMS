/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('addresses', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    addressLine1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    addressLine2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    city: {
      type: DataTypes.STRING,
      allowNull: true
    },
    state: {
      type: DataTypes.STRING,
      allowNull: true
    },
    zipCode: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ownerId: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'addresses'
  });
};
