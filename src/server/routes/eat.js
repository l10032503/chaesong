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
const eat = express.Router();
eat.use(cors());

const MemberEat = sequelize.define(
    'MemberEat',
    {
        user_id: {
            type:Sequelize.STRING,
            primaryKey: true
        },
        EATEN_DATE:{
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW,
            primaryKey: true
        },
        recipe_code: {
            type:Sequelize.STRING,
            primaryKey: true
        }
    },{
        timestamps: false
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

eat.post('/', (req,res)=>{
    console.log("eat post route");
    const loginUserData = {
        user_id : req.body.user_id,
    };
    const recipeData = {
        recipe_code : req.body.recipe_code
    };
    const eatData = {
        user_id : req.body.user_id,
        recipe_code : req.body.recipe_code,
        EATEN_DATE : req.body.EATEN_DATE
    };
    console.log("eat post route2");
    MemberEat.findOne({
        where :{
            user_id : eatData.user_id,
            recipe_code : eatData.recipe_code
        }
    }).then((memberEat)=>{
        if(!memberEat){
            MemberEat.create(eatData)
                .then(memberEat=>{
                    console.log("eat create");
                    return res.json({success: true})
                })
                .catch(err=>{
                    console.log("eat error");
                    return res.send('error' + err)
                })
        }else{
            MemberEat.destroy({
                where:{
                    user_id : eatData.user_id,
                    recipe_code : eatData.recipe_code
                }
            })
                .then(memberEat=>{
                    console.log("eat delete");
                    return res.json({success: true})
                })
                .catch(err=>{
                    console.log("eat error");
                    return res.send('error' + err)
                })
        }
    }).catch((err)=>{
        return res.send('error' + err);
    })
});

module.exports = eat;