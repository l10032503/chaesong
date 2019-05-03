const express = require("express");
const memberJoins = express.Router();
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
        },
        sex:{
            type: Sequelize.INTEGER
        },
        caloryForDay:{
            type: Sequelize.INTEGER
        }
    },
    {
        timestamps: false
    }
);

memberJoins.use(cors());

memberJoins.post('/signup', (req, res)=>{
   const today = new Date();
   const memberData = {
       user_id : req.body.user_id,
       pw: req.body.pw,
       birthyear: req.body.birthyear,
       height: req.body.height,
       weight: req.body.weight,
       active: req.body.active,
       register_date: today,
       vegantype: req.body.vegantype,
       sex: 0,
       caloryForDay: 0
   };



    let userIDRegex = /^[a-z0-9]+$/;

    if(!userIDRegex.test(req.body.user_id)) {
        return res.status(400).json({ // HTTP 요청에 대한 리스폰스 (json 형식으로)
            error: "BAD USERNAME",
            code: 1
        });
    }

    // CHECK PASS LENGTH
    // 비밀번호 유형 검사 (4보다 작거나, 들어온 비밀번호의 값이 문자열이 아닐 경우)
    if(req.body.pw.length < 4 || typeof req.body.pw !== "string") {
        return res.status(400).json({
            error: "BAD PASSWORD",
            code: 2
        });
    }

   MemberJoin.findOne({
       where:{
           user_id : req.body.user_id
       }
   })
       .then(memberJoin=>{
           if(!memberJoin){
               MemberJoin.create(memberData)
                   .then(memberJoin=>{
                       return res.json({success: true})
                   })
                   .catch(err=>{
                       return res.send('error' + err)
                   })
           }else{
               return res.json({
                   error: "ID already exists",
                   code : 3
               })
           }
       })
       .catch(err=>{
           return res.send('error' + err)
           })
});


module.exports = memberJoins;