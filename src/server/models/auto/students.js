/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('students', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'users',
        key: 'username'
      }
    },
    gradeLevel: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'students'
  });
};
