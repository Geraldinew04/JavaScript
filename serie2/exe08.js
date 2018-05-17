
function jourDeLaSemaine(){

var date = new Date().getDay();

	switch(date){
		case 0:
		alert("On est dimanche");
		break;

		case 1: 
		alert("On est lundi");
		break;

		case 2: 
		alert("On est mardi"); 
		break;

		case 3: 
		alert("On est mercredi");
		break;

		case 4: 
		alert("on est jeudi"); 
		break; 

		case 5: 
		alert("on est vendredi"); 
		break;

		default: 
		alert("on est samedi");
		break;

	}	
}