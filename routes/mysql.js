var mysql      = require('mysql');
// 비밀번호는 별도의 파일로 분리해서 버전관리에 포함시키지 않아야 합니다.
var connection = mysql.createConnection({
    host     : 'chaesong.cccteklwfdo9.ap-northeast-2.rds.amazonaws.com',
    user     : 'comhong',
    password : 'sook2019',
    database : 'chaesongdb'
});

connection.connect();

connection.end();