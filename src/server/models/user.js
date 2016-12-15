const db = require('./db'); // unit of work
// getAll including relations
exports.authenticate = (payload, err, success) => {
   db.user.find({
    where: {
      username: payload.name,
      password: payload.password
    },
    include: [ // include relations, even deeper multilevel
            { all: true, nested: true },
    ]
  }).then(success).catch(err);
};
exports.getAddresses = (payload, err, success) => {
  db.sequelize.query(
    "SELECT * FROM Addresses WHERE ownerid = :username",
    { replacements: { username: payload.id }, type: db.sequelize.QueryTypes.SELECT }
  )
    .then(success).catch(err);
};
exports.findAll = (err, success) => {
  db.user.findAll({ include: [{ all: true, nested: true }]}).then(success).catch(err);
};
// getById including relations
exports.findById = (payload, err, success) => {
  db.user.find({
    where: {
      username: payload.id
    },
    include: [ // include relations, even deeper multilevel
            { all: true, nested: true },
    ]
  }).then(success).catch(err);
};
// insert new, needs to resolve fact that info is in user and sutdent table
exports.create = (payload, err, success) => {
  db.user.create(payload).then(success).catch(err);
};
// modify existing, needs to resolve fact that info is in user and sutdent table
exports.update = (payload, err, success) => { // investigate Object.assign(entityObject, req.body)
  db.user.find({
    where: {
      username: payload.id
    },
  }).then((data) => {
    data.updateAttributes(payload).then(success).catch(err);
  }).catch(err);
};
// delete existing, needs to resolve fact that info is in user and student table
exports.destroy = (payload, err, success) => {
  db.user.destroy({
    where: {
      username: payload.id
    },
  }).then(success).catch(err);
};
