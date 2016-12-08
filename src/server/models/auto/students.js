/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('students', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
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
