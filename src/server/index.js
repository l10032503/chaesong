const mysql = require("mysql");
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const connection  = mysql.createConnection({
    "host"         : "chaesong.cccteklwfdo9.ap-northeast-2.rds.amazonaws.com",
    "user"         : "comhong",
    "password"      : "sook2019",
    "database"      : "chaesongdb"
});

connection.connect();


app.use(express.static("dist"));
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));

const MemberJoins = require("./routes/MemberJoins");
app.use('/MemberJoins', MemberJoins);




app.get("/show", (req, res) =>
    connection.query("SELECT * FROM test", (err, rows) => {
        if(err) throw err;
        res.send(rows);
    })
);


app.listen(4000,function(){
    console.log("Started listening on port", 4000);
});