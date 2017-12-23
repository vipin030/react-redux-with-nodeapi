var db=require('../dbconnection');

var Student={

getAllStudents:function(callback){

return db.query("Select * from std",callback);

},
getStudentById:function(id,callback){

    return db.query("select * from std where no=?",[id],callback);
},
addStudent:function(Student,callback){
   console.log("inside service");
return db.query("insert into std values(?,?,?,?,?,?)",[null,Student.no,Student.name,Student.city,Student.age,Student.department],callback);
//return db.query("insert into Student(Id,Title,Status) values(?,?,?)",[Student.Id,Student.Title,Student.Status],callback);
},
deleteStudent:function(id,callback){
    return db.query("delete from std where no=?",[id],callback);
},
updateStudent:function(id,Student,callback){
    return  db.query("update std set no=?,name=?,city=?,age=?,department=? where id=?",[Student.no,Student.name,Student.city,Student.age,Student.department,id],callback);
},
deleteAll:function(item,callback){

var delarr=[];
   for(i=0;i<item.length;i++){

       delarr[i]=item[i].Id;
   }
   return db.query("delete from std where no in (?)",[delarr],callback);
}
};
module.exports=Student;