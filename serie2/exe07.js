

function faireChoix(){
var choix = prompt("Choisissez entre 1, 2 et 3");
	switch(choix){
		case "1": //si le nombre choisi est 1
		alert("1.Merci");
		break; 

		case "2":// si le nombre choisi est 2
		alert("2.Bonjour"); 
		break; 

		case "3":// si le nombre choisi est 3
		alert("3.Au revoir"); 
		break; 

		default: // autre choix
		alert("Pardon, que voulez-vous ?");
		break;
	}

}