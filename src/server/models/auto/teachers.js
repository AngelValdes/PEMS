/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('teachers', {
    teacherId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'userId'
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
