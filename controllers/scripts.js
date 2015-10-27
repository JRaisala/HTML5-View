//Wait document.ready event
$(document).ready(function(){
    console.log("jquery onload triggered");
    $("nav").css("background-color","lightblue")
    .css("padding","20px").css("border-radius","8px");
  });


$(".about").html("<b>New text</b>");  
$("[data-dummy]").html("<p>hello world!</p>");

  /*NONSENSE
    var data = documets.getElementsByTagName("nav");
    for(i=o; { i < data.lenght; (++) {
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

