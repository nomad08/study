menu.onclick = function myFunction() {
	var x = document.getElementByid("myTopnav")
	
	if(x.className === "topnav"){
		x.className += " responsive";
 	} else{
 		x.className = "topnav";
 	}
}
