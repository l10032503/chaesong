const express = require("express");
const memberJoins = express.Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
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
const MemberJoin = sequelize.define(
    'memberJoin',
    {
        user_id: {
            type:Sequelize.STRING,
            primaryKey: true
        },
        pw:{
            type: Sequelize.STRING
        },
        birthyear:{
            type: Sequelize.INTEGER
        },
        height:{
            type: Sequelize.INTEGER
        },
        weight:{
            type: Sequelize.INTEGER
        },
        active:{
            type: Sequelize.INTEGER
        },
        register_date:{
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        },
        vegantype:{
            type: Sequelize.INTEGER
        }
    },
    {
        timestamps: false
    }
);


memberJoins.use(cors());

process.env.SECRET_KEY = 'secret';

memberJoins.post('/signup',(req,res)=>{
    const today = new Date();
    const memberJoinData = {
        pw: req.body.pw,
        bitrhyear: req.body.birthyear,
        height: req.body.height,
        weight: req.body.weight,
        active: req.body.active,
        register_date: today,
        vegantype: req.body.vegantype
    };

    MemberJoin.findOne({
       where:{
           user_id : req.body.user_id
       }
    })
        .then(memberJoin=>{
            if(!memberJoin){
                bcrypt.hash(req.body.pw, 10, (err,hash)=>{
                    memberJoinData.pw = hash;
                    MemberJoin.create(memberJoinData)
                        .then(memberJoin=>{
                            res.json({status: memberjoin.user_id + 'registered'});
                        })
                        .catch(err => {
                            res.send('error: '+ err);
                        });
                });
            }else{
                res.json({error: "ID already exists"});
            }
        })
        .catch(err=>{
            res.send('error:' + err)
        });
});

memberJoins.post('/login',(req,res)=>{
   MemberJoin.findOne({
     where:{
         user_id: req.body.user_id
     }
   }).then(memberJoin=>{
       if(memberJoin){
           if(bcrypt.compareSync(req.body.pw)){
               let token = jwt.sign(memberJoin.dataValue, process.env.SECRET_KEY,{
                   expiresIn: 1440
               });
               res.send(token);
           }else{
               res.status(400).json({error: "User does not exist"});
           }
       }
   })
       .catch(err=>{
           res.status(400).json({error:err});
       })
});

module.exports = memberJoins;