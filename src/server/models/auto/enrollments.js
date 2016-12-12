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
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'students',
        key: 'studentId'
      }
    },
    schoolId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'schools',
        key: 'schoolId'
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
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'teachers',
        key: 'teacherId'
      }
    }
  }, {
    tableName: 'enrollments'
  });
};
