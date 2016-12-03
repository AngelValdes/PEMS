// User Repository
const db = require('./db');
// getAll including relations
exports.findAll = (err, success) => {
  db.user.findAll({ include: [{ all: true, nested: true }]}).then(success).catch(err);
};
