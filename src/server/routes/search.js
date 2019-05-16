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
const Op = Sequelize.Op;
const search = express.Router();

search.use(cors());

const Recipe = sequelize.define(
    'Recipe',
    {
        recipe_id:{
            type: Sequelize.INTEGER
        },
        recipe_code: {
            type:Sequelize.STRING,
            primaryKey: true
        },
        recipe_name: {
            type:Sequelize.STRING,
        },
        content: {
            type:Sequelize.TEXT,
        },
        imgurl: {
            type: Sequelize.TEXT
        },
        vegantype: {
            type: Sequelize.TEXT
        },
        seafood: {
            type: Sequelize.TEXT
        },
        milk: {
            type: Sequelize.TEXT
        },
        egg: {
            type: Sequelize.TEXT
        }
    },{
        timestamps: false
    }
);


search.get('/:searchWord', (req,res)=>{
    console.log("recipe search routes");
    let searchWord = req.params.searchWord;
    console.log(req.params.searchWord + " & " +searchWord);
    Recipe.findAll({
        where:{
            [Op.or]: [
                {
                    recipe_name: {
                        [Op.like]: "%" + searchWord + "%"
                    }
                },
                {
                    content:{
                        [Op.like]: "%" + searchWord + "%"
                    }
                }
            ]
        }
    }).then(recipes=>{
        //console.log(recipes);
        return res.json(recipes)
    })
        .catch(err=>{
            return res.send('error' + err)
        })
});

module.exports = search;