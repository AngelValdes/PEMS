/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('enrollments', {
    enrollmentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    room: {
      type: DataTypes.STRING,
      allowNull: true
    },
    time: {
      type: DataTypes.STRING,
      allowNull: true
    },
    absences: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    comments: {
      type: DataTypes.STRING,
      allowNull: true
    },
    studentId: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'students',
        key: 'username'
      }
    },
    schoolId: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'schools',
        key: 'schoolNumber'
      }
    },
    courseId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'courses',
        key: 'courseId'
      }
    },
    teacherId: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'teachers',
        key: 'username'
      }
    }
  }, {
    tableName: 'enrollments'
  });
};
