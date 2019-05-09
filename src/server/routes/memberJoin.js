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
        sex:{
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
        calorieForDay:{
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
       sex: req.body.sex,
       height: req.body.height,
       weight: req.body.weight,
       active: req.body.active,
       register_date: today,
       vegantype: req.body.vegantype,
       sex: 0,
       calorieForDay: 0
   };
   //개인 표준몸무게(standWeight)는 키(height)에 따라 다르다
   const grantStandWeight = (height) => {
       let standWeight;
       if(height < 150) { standWeight = height - 100; }
       else if(height >= 150 && height < 160) { standWeight = (height - 150) / 2 + 50; }
       else if(height >= 160) { standWeight = (height - 100) * 0.9; }
       return standWeight;
   }
   //개인의 체중범위(weightRange)는 실제 체중(weight)과 표준몸무게(standWeight)로 측정한다
   const grantWeightRange = (weight, standWeight) => {
       let overweightPercent = weight / standWeight * 100.0;
       if (overweightPercent <= 90) { return 1; } //저체중
       else if (overweightPercent >= 90 && overweightPercent < 110) { return 2;	} //정상
       else if (overweightPercent >= 110 && overweightPercent < 120) { return 3; } //과체중
       else if (overweightPercent >= 120 && overweightPercent < 140) { return 4; } //비만
       else if (overweightPercent > 140) { return 5; } //심한 비만
   }
   //1kg당 필요한 칼로리(requiredCalPerKg)는 체중범위(weightRange)와 활동량(active)으로 측정한다
   const grantRequiredCalPerKg = (weightRange, active) => {
       let requiredCalPerKg;
       if(weightRange >= 3) {
           switch(active) {
               case "1": requiredCalPerKg = 22.5; break;
               case "2": requiredCalPerKg = 27.5; break;
               case "3": requiredCalPerKg = 32.5; break;
           }
       }
       else if(weightRange === 2) {
           switch(active) {
               case "1": requiredCalPerKg = 27.5; break;
               case "2": requiredCalPerKg = 32.5; break;
               case "3": requiredCalPerKg = 37.5; break;
           }
       }
       else if(weightRange === 1) {
           switch(active) {
               case "1": requiredCalPerKg = 32.5; break;
               case "2": requiredCalPerKg = 37.5; break;
               case "3": requiredCalPerKg = 42.5; break;
           }
       }
       return requiredCalPerKg;
   }
   const calorieForDay = (height, weight, active) => {
        let standWeight = grantStandWeight(height);
        let weightRange = grantWeightRange(weight, standWeight);
        let totalCalRequired = weight * grantRequiredCalPerKg(weightRange, active);
        return totalCalRequired;
    }

    memberData.calorieForDay = calorieForDay(req.body.height, req.body.weight, req.body.active);

   let userIDRegex = /^[a-z0-9]+$/;

   if(!userIDRegex.test(req.body.user_id)) {
       return res.status(400).json({ // HTTP 요청에 대한 리스폰스 (json 형식으로)
           error: "BAD USERNAME",
           code: 1
       });
   }

   // CHECK PASS LENGTH
   //비밀번호 유형 검사 (4보다 작거나, 들어온 비밀번호의 값이 문자열이 아닐 경우)
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