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
          url:"http://localhost:28017/oma/person/",
          dataType:"jsonp",
          jsonp:"jsonp"
}

$.ajax(setting).done(function(data){
  
  console.log(data);
  for(var i=0; i < data.rows.length; i++){
    
      var html = "<tr>" +   
                 "<td>" + data.rows[i].name + "</td>" +
                  "<td>" + data.rows[i].address + "</td>" +
                  "<td>" + data.rows[i].age + "</td>" +
                  "</tr>";
    
    $(html).appendTo("tbody");
  }
});


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

