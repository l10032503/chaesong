import express from 'express';
const cors = require("cors");
const Sequelize = require("sequelize");
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
const scrap = express.Router();
scrap.use(cors());

const MemberScrap = sequelize.define(
    'MemberScrap',
    {
        user_id: {
            type:Sequelize.STRING,
            primaryKey: true
        },
        recipe_code: {
            type:Sequelize.STRING,
            primaryKey: true
        },
        SCRAP_DATE:{
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        }
    }
);
const Recipe = sequelize.define(
    'Recipe',
    {
        recipe_code: {
            type:Sequelize.STRING,
            primaryKey: true
        }
    },{
        timestamps: false
    }
);
const MemberJoin = sequelize.define(
    'memberJoin',
    {
        user_id: {
            type:Sequelize.STRING,
            primaryKey: true
        }
    },
    {
        timestamps: false
    }
);

scrap.post('/', (req,res)=>{

});

module.exports = scrap;