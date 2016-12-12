/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usersToUserTypes', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    userTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'userTypes',
        key: 'userTypeId'
      }
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'userId'
      }
    }
  }, {
    tableName: 'usersToUserTypes'
  });
};
