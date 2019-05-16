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
const recipe = express.Router();

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

recipe.use(cors());

recipe.get('/', (req,res)=>{
    console.log("recipeviewtest routes");
    Recipe.findAll()
        .then(recipes=>{
            return res.json(recipes)
        })
        .catch(err=>{
            return res.send('error' + err)
        })
});

/*recipe.get('/:searchWord', (req,res)=>{
    console.log("recipeviewtest routes");
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
            return res.json(recipes)
        })
        .catch(err=>{
            return res.send('error' + err)
        })
});




recipe.get('/filter', (req,res)=>{
   console.log("recipeFilter routes");
});

recipe.get('/search/:searchWord',(req,res)=>{
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
        console.log("router success");
        //console.log(recipes);
        return res.json(recipes);
    }).catch(err=>{
        console.log(err);
    })
});

recipe.get('/search', (req,res)=>{
    res.json([]);
});*/

module.exports = recipe;