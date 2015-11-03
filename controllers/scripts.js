//This variable is shown to every function
var g_person_data;



//Wait document.ready event
$(document).ready(function(){
    console.log("jquery onload triggered");
    $("nav").css("background-color","lightblue")
    .css("padding","20px").css("border-radius","8px");
  });


$(".about").html("<b>New text</b>");  
$("[data-dummy]").html("<p>hello world!</p>");

var setting = {
  
          method:"GET",
          url:"http://localhost:3000/persons",
          dataType:"json",
}

$.ajax(setting).done(function(data){
  
  console.log(data);
  //Get all keys](attribute names) From json object
  console.log(Object.keys(data[0]));
  
//Check that there are elements in array
if(data.length > 0){
  
        var headers = Object.keys(data[0]);
    
    //Create table headers dynamicaly
    var row = $("<tr></tr>");
    for(var i = 1; i < headers.length; i++){
      
      //Create row for headers
      $("<th>" + headers[i] + "</th>").appendTo(row);
    }
    /*Add row to thead element*/
    $(row).appendTo("thead");
      
    }
  
  //Create table content dynamically
  for(var i=0; i < data.length; i++){
    
    
      var html = "<tr>" +   
                 "<td>" + data[i].name + "</td>" +
                  "<td>" + data[i].address + "</td>" +
                  "<td>" + data[i].age + "</td>" +
                  "<td><input type='button' id=" + data[i]._id + " value='Modify'/></td>" +
                  "</tr>";
    
    $(html).appendTo("tbody");
  }
  
  
  
  //get all elements from DOM where element has
//attributes 'typeä with value 'button', Then add
//event handler for click event for each of them
   $("[type=button]").click(function(click_data){
      
     //Loop throught all values
     for (var i = 0; i < data.length; i++){
     if(click_data.currentTarget.id ==  data[i]._id)
     {
        buildModifyUI(data[i]);
        break;
     }
       
     }
      });
});

function buildModifyUI(person_data){

      var html = "<input type='text' value='" + person_data.name + "'/>";
  
    $("body").html(html);
      
}


  /*NONSENSE
    var data = documets.getElementsByTagName("nav");
    for(i=0; { i < data.lenght; (++) {
                               data[i].style.backgroundColor = "red";
});

$(document).ready(domReady);
function domReady(){
}


*/



/*

console.log("jeejeeJEE");
window.onload = function(event){

  console.log(event);
  para1.innerHTML = "Changed from 35";
  para1.style.backgroundColor = "yellow";
  

}

window.onload = domReadyjeejee;
function domReadyjeejee(event) {
  return ;
}

function someFunction(nimi){
    console.log(nimi);
}

someFunction(21);
someFunction("Juha");
*/

