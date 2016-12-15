const db = require('./db'); // unit of work
// getAll including relations

exports.findAll = (err, success) => {
  db.enrollment.findAll({ include: [{ all: true, nested: true }]}).then(success).catch(err);
};

exports.findById = (payload, err, success) => {
  db.enrollment.find({
    where: {
      enrollmentId: payload.id
    },
    include: [ // include relations, even deeper multilevel
            { all: true, nested: true },
    ]
  }).then(success).catch(err);
};
