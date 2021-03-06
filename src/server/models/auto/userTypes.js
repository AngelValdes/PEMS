/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('userTypes', {
    userTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'userTypes'
  });
};
