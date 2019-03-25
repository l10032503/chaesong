const mysql = require('mysql');
const connection = mysql.createConnection({
    host          : "chaesong.cccteklwfdo9.ap-northeast-2.rds.amazonaws.com",
    port          : 3306,
    user          : "comhong",
    password : "sook2019",
    database  : "chaesongdb"
});

connection.connect();

connection.query('select * from test', function(err, res, fileds) {
    if (err) {
        console.error(err.stack);
        return;
    }

    console.log(res[0]);
    console.log(res[1]);
});


connection.end();