const Sequelize = require('sequelize');

const db = {};
const sequelize = new Sequelize('chaesongdb', 'comhong', 'sook2019', {
        host: "chaesong.cccteklwfdo9.ap-northeast-2.rds.amazonaws.com",
        dialect: 'mysql',
        operatorsAliases: false,

        pool:{
            max:5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    }
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
