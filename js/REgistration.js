    var arrayEmail=[],
	    arrayPPassword=[];
function checkInfo(){		
	var FName=document.getElementById("firstname").value,
	    LName=document.getElementById("lastname").value,
		Age=document.getElementById("age").value,
		Email=document.getElementById("email").value,
		PPassword=document.getElementById("password").value;
		
    if(FName==""){
		alert(" first name is empty");
	}
	else if(LName==""){
		alert(" Last name is empty");
	}
	else if(Age==""){
		alert(" Age is empty");
	}
	else if(Email==""){
		alert(" Email is empty");
	}
	else if(PPassword ==""){
	alert("password is Empty");
	}
	else{
		if(Email.indexOf("@")==-1 || Email.indexOf(".")==-1 ){
			alert("please enter correct email");
		}
		else{
			alert("Your Account has been created Go to sign in");
			arrayEmail.push(Email);
			arrayPPassword.push(PPassword);
			window.location.href='loginasly.html';
		}
	}
}
function changeimage(){
	"use strict";
	document.body.style.backgroundImage= "url('../images/car-8.jpg')";
}