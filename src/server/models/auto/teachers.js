/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('teachers', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'users',
        key: 'username'
      }
    },
    certificationArea: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'teachers'
  });
};
