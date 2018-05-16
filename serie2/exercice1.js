function surfaceRectangle(){
	var larg = document.getElementById("largeur").value;
	var long = document.getElementById("longueur").value;

	alert(larg * long);
}

function periRectangle(){
	var larg = document.getElementById("largeur").value;
	var long = document.getElementById("longueur").value;
	var perimetre = (Number(larg) + Number(long))*2;
	alert(perimetre);
}