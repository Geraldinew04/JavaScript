function calculIMC(){

	var poids = parseFloat(prompt("Encodez votre poids en kilogrammes"));
	
	var taille = parseFloat(prompt("Encodez votre taille en mètres"));
	
	var imc = poids/(taille * taille);

	var imc_décimale = imc.toFixed(2)

	switch(true){
		case (imc_décimale < 16.5) :
			alert( imc_décimale + " Dénutrition ou famine");
			break; 

		case (imc_décimale < 18.5) :
			alert(imc_décimale + "Maigreur");
			break; 

		case (imc_décimale < 25) :
			alert(imc_décimale + " Corpulence normale");
			break; 

		case (imc_décimale < 30) :
			alert(imc_décimale + " Surpoids");
			break;

		case (imc_décimale < 35) :
			alert(imc_décimale + " Obésité modérée");
			break;

		case (imc_décimale < 40) :
			alert(imc_décimale + " Obésité sévère");
			break;

		case (imc_décimale > 40) :
			alert(imc_décimale + " Obésité morbide");
			break; 

		default: 
		alert("ERROR");
	}
}