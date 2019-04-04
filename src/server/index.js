const mysql = require("mysql");
const express = require("express");
const app = express();
const cors = require("cors");
const session = require("express-session");
const bodyParser = require("body-parser");
const path =require( 'path');
import api from './routes';
const connection  = mysql.createConnection({
    "host"         : "chaesong.cccteklwfdo9.ap-northeast-2.rds.amazonaws.com",
    "user"         : "comhong",
    "password"      : "sook2019",
    "database"      : "chaesongdb"
});
connection.connect();

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));

app.use(express.static("dist"));
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/api', api);


app.get('*', function (request, response){
    response.sendFile(path.resolve('dist', 'index.html'))
});

app.get("/show", (req, res) =>
    connection.query("SELECT * FROM test", (err, rows) => {
        if(err) throw err;
        res.send(rows);
    })
);





app.listen(process.env.PORT || 4000,function(){
    console.log("Started listening on port", 4000);
});
