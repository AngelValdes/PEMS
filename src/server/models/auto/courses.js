/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('courses', {
    courseId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    electronicBook: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'courses'
  });
};
