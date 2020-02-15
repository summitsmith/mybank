function login(){
	let name=document.getElementById("name").value;
	let password=document.getElementById("pass").value;	
    if((name=="shafic" && password=="fic")||(name=="deric" && password=="pro")){
	window.open("loggedin.html");
	}
	else{
    alert("wrong user name and password");
}
}