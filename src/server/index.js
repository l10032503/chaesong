const mysql = require("mysql");
const express = require("express");
const app = express();

app.use(express.static("dist"));

const connection  = mysql.createConnection({
    "host"         : "chaesong.cccteklwfdo9.ap-northeast-2.rds.amazonaws.com",
    "user"         : "comhong",
    "password"      : "sook2019",
    "database"      : "chaesongdb"
});

connection.connect();

app.get("/show", (req, res) =>
    connection.query("SELECT * FROM test", (err, rows) => {
        if(err) throw err;
        res.send(rows);
    })
);
app.post('/register', function(req, res){
    var user_id = req.body.user_id;
    var pw = req.body.pw;
    var birthyear = req.body.birthyear;
    var height = req.body.height;
    var weight = req.body.weight;
    var active = req.body.active;
    var register_date = req.body.register;
    var vegantype = req.body.vegantype;

    var sql = 'insert into MemberJoin (content) VALUE(?)';
    var params = [content];
    connection.query(sql, params, function(error, results, fields){
        if(error){
            console.log(error);
            res.json({message: 'fail'});
        }
        else{
            console.log('success!');
            res.json({message: 'complete'});
        }
    });
});

app.listen(4000,function(){
    console.log("Started listening on port", 4000);
});