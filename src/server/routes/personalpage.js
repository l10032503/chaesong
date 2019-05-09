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

const personalpage = express.Router();

const Recipes = sequelize.define(
    'Recipe',
    {
        recipe_code: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        recipe_name: {
            type:Sequelize.STRING
        },
        ENERGY: {
            type:Sequelize.DOUBLE
        },
        PROCPN: {
            type: Sequelize.DOUBLE
        }
    },{
        timestamps: false
    }
);
const MemberEat = sequelize.define(
    'MemberEat',
    {
        recipe_code:{
            type: Sequelize.STRING,
            primaryKey: true,
            references: {model: Recipes, key: 'recipe_code'}
        },
        user_id: {
            type: Sequelize.STRING
        }
    },{
        timestamps: false
    }
);



personalpage.use(cors());

personalpage.get('/', (req,res)=>{
    console.log("personal page router");
    /* MemberEat.findAll(
        {
            where: {
                recipe_code:Recipes.recipe_code
            },
            include: [Recipes]
        }
    ).then(MemberEats=>{
        return res.json(MemberEats)
    })
        .catch(err=> {
            return res.send('error' + err)
        }); */
    MemberEat.findAll(
        {
            include: [
                {model: Recipe, where: {active: true}, required: false}
            ]
        }
    )
        .then(MemberEats => {
            return res.json(MemberEats)
        })
});

//망했어 망했어

module.exports = personalpage;