function checkin(){
	var E_mail=document.getElementById("Email").value,
	    Pass =document.getElementById("Password").value,
		Admin="strikers@FCIS.com",
		AdminPass="123456",
		UserName="FCIS@FCIS.com",
		UserPAssword="1234";
	if(E_mail==Admin && Pass == AdminPass){
		window.location.href='Admin/home.html';
	}
	else if(UserName ==E_mail&&UserPAssword==Pass){
		window.location.href='User/home.html';
		
	}
	else{
		alert("Email or password incorrect");
	}
		
} 
function Regist(){
	window.location.href='Registration.html';
}