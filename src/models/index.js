'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/database.json')[env];
const db = {};

// let sequelize;
// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
// }
console.log(config.database, config.username, config.password,);
let sequelize = new Sequelize(config.database, config.username, config.password, config,{
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Users = require('./user.model')(sequelize, Sequelize)
db.Roles = require('./role.model')(sequelize, Sequelize)
db.RoomTypes = require('./roomtype.model')(sequelize, Sequelize)
db.RoomDetails = require('./roomdetails.model')(sequelize, Sequelize)
db.RoomPortfolio = require('./roomportfolios.model')(sequelize,Sequelize)
db.Otp = require('./otp.model')(sequelize, Sequelize)
db.Country = require('./country.model.js')(sequelize, Sequelize)
db.State = require('./states.model.js')(sequelize, Sequelize)
db.Cities = require('./cities.model.js')(sequelize, Sequelize)
db.Tenant = require("./tenant.model")(sequelize, Sequelize)


db.Users.hasOne(db.Roles,{foreignKey:'id'})
db.Roles.hasMany(db.Users,{foreignKey:'role_id'})
db.RoomDetails.hasMany(db.Users,{foreignKey:'id',sourceKey:"user_id"})
db.Users.hasMany(db.RoomDetails,{foreignKey:'user_id',sourceKey:'id'})
db.RoomTypes.hasMany(db.RoomDetails,{foreignKey:'room_type_id',sourceKey:'id'})
db.RoomDetails.hasMany(db.RoomPortfolio, { foreignKey: 'room_id' })

module.exports = db;
