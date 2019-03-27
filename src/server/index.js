const mysql = require("mysql");
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
import path from 'path';
const connection  = mysql.createConnection({
    "host"         : "chaesong.cccteklwfdo9.ap-northeast-2.rds.amazonaws.com",
    "user"         : "comhong",
    "password"      : "sook2019",
    "database"      : "chaesongdb"
});
connection.connect();

import api from './routes';
app.use('/api', api);


app.use(express.static("dist"));
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));

app.get('*', function (request, response){
    response.sendFile(path.resolve('dist', 'index.html'))
});

app.get("/show", (req, res) =>
    connection.query("SELECT * FROM test", (err, rows) => {
        if(err) throw err;
        res.send(rows);
    })
);


app.listen(4000,function(){
    console.log("Started listening on port", 4000);
});