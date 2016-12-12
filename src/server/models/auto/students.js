/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('students', {
    studentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'userId'
      }
    },
    grade: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'students'
  });
};
