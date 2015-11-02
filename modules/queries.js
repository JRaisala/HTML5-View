var db = require('./database');
exports.getAllPersons = function(req,res){
     /*
     this function gets all documents from person collection*/
  db.Person.find(function(err,data){
    
            if(err){  
                    console.log(err.message);
                    res.send("Error in database");
                }
                else{
                    res.send(data);
                             }
                 });
}