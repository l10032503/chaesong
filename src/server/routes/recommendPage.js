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

const recommendPage = express.Router();
recommendPage.use(cors());

const Recipe = sequelize.define(
    'Recipe',
    {
        recipe_name: {
            type:Sequelize.STRING
        },
        imgurl: {
            type:Sequelize.STRING
        }
    },{
        timestamps: false
    }
);

recommendPage.post('/', (reg, res) => {
    console.log("recommendpage router");
    sequelize.query("SELECT recipe_name, imgurl FROM Recipes BY RAND() LIMIT 5", { model: Recipes })
        .then(Recipes => {return res.json(Recipes);} )
})

module.exports = recommendPage;
