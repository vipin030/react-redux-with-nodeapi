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
   //console.log(Task.Id);
return db.query("Insert into std values(?,?,?,?,?)",[Student.no,Student.name,Student.city,Student.age,Student.department],callback);
//return db.query("insert into task(Id,Title,Status) values(?,?,?)",[Task1.Id,Task1.Title,Task1.Status],callback);
},
deleteStudent:function(id,callback){
    return db.query("delete from std where no=?",[id],callback);
},
updateStudent:function(id,Student,callback){
    return  db.query("update std set name=?,city=?,age=?,department=? where no=?",[Student.name,Student.city,Student.age,Student.department,id],callback);
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