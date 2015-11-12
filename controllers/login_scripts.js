$(document).ready(function(){
    $("#login").click(loginHandler);
    $("#register").click(registerHandler);
});

/*
*This function is called when login button is pressed
*/
function loginHandler(event){
    
        var requestData = {
        
            username:$("username").val(),
            password:$("password").val()
        }
        
        localStorage['username'] = $("#username").val();
        sessionStorage['user'] = $("username").val();


        /*Send login request to server*/
        $.ajax({
            
            method:'POST',
            url:'http://localhost:3000/friends/login',
            data:requestData,
            datatype:'json'
        }).done(loginResponseHandler);
}


/**
*This function is called when register button is pressed
*/
function registerHandler(event){
    
        var requestData = {
            username:$("username").val(),
            password:$("password").val()
        }
        
       
        /*Send login request to server*/
        $.ajax({
            
            method:'POST',
            url:'http://localhost:3000/friends/register',
            data:requestData,
            datatype:'json'
        }).done(registerResponsehandler);
}
/*This function is called when register response
*arrives in some point of time
*/

function registerResponsehandler(data){
    $("#status").text(data.status);
}

function loginResponseHandler(data){
    
    
    if(data.status === "Ok"){
        
      window.location.href='http://localhost:3000/persons.html';
        
    }else{
         $("#status").text(data.status);
        }
    }

function renderPersonView(data){
    
    console.log(data);
}


