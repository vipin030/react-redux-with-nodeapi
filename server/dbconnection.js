var mysql=require('mysql');
var connection=mysql.createPool({

host:'localhost',
user:'root',
password:'root123',
database:'student'


});
module.exports=connection;