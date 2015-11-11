var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/oma',connectionStatus);
/** 
Connection callback for fail and ok cases
**/
function connectionStatus(err,ok){
  
  if(err){
      console.log(err.message);
}else{
    console.log("We are connected!");
  }
}
var User = mongoose.model('User',{
        username:{type:String,unique:true},
        password:String,
        friends:[{type:Scema.type.ObjectId,ref:'Person'}]
});


var Person = mongoose.model('Person',{
  name:String,
  address:String,
  age:{type:Number}
},'person' );

//Using exports objects you expose the data to other modules
exports.Person = Person;

exports.myFunction = function(){
  console.log("This ");
} 


