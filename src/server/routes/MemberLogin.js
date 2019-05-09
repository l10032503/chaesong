const express = require("express");
const router = express.Router();
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
const MemberLogin = sequelize.define(
    'memberJoins',
    {
        user_id: {
            type:Sequelize.STRING,
            primaryKey: true
        },
        pw:{
            type: Sequelize.STRING
        }
    },
    {
        timestamps: false
    }
);

router.use(cors());

router.post('/signin', (req, res)=> {

    const loginUserData = {
        user_id : req.body.user_id,
        pw : req.body.pw
    };

    MemberLogin.findOne({where:{user_id : req.body.user_id}})
        .then(memberLogin => {
            if(!memberLogin){
                return res.status(401).json({
                    error: "There is no user",
                    code:2
                });
            }

            if(req.body.pw === memberLogin.pw){
                let session = req.session;
                session.loginInfo ={
                    _id : memberLogin.user_id,
                    user_id: memberLogin.user_id
                };
                res.cookie("member", req.body.user_id,{
                    expires: new Date(Date.now() + 900000)
                });
                res.cookie("calorieForDay", req.body.calorieForDay);//////
                return res.json({
                    success: true
                });
            }else{
                return res.status(401).json({
                    error: "password is not correct",
                    code : 3
                });
            }
        });
});

router.get('/getinfo',(req,res)=>{
    if(typeof req.session.loginInfo === "undefined") {
        return res.status(401).json({
            error: "THERE IS NO LOGIN DATA",
            code: 1
        });
    }
    res.json({ info: req.session.loginInfo });
});

router.post('/logout', (req, res)=>{
    req.session.destroy(err => {if(err) throw err;});
    return res.json({success: true});
});

module.exports = router;