function conversionTemperature(){

var menu = prompt("Quel type de conversion choisissez-vous\n0. Fin du programme\n1. De Celsius vers Fahrenheit\n2. De Celsius vers Kelvin\n3. De Fahrenheit vers Celsius\n4. De Fahrenheit vers Kelvin\n5. De Kelvin vers Celsius\n6. De Kelvin vers Fahrenheit");
var temperature = prompt("entrez la température à convertir");
var tempK = temperature;//Kelvin
var tempC = temperature;//Celsius
var tempF = temperature;//Fahrenheit

	switch(menu){
		case "0": 
		alert("Fin du programme");
		break; 

		case "1":
		tempF = (Number(tempC) * 9/5) + 32;
		alert(tempF.toFixed(2) + " °F");
		break;

		case "2":
		tempK = (Number(tempC)) + 273.15;
		alert(tempK + " °K");
		break;

		case "3":
		tempC = ((Number(tempF) - 32)  / (9/5));
		alert(tempC.toFixed(2) + " °C");
		break; 

		case "4":
		tempK = ((Number(tempF) - 32) * (5/9)) + 273.15;
		alert(tempK.toFixed(2) + " °K");
		break; 

		case "5":
		tempC = Number(tempK) - 273.15;
		alert(tempC + " °C");
		break;

		default: 
		tempF = (Number(tempK) * 9/5) - 459.67;
		alert(tempF.toFixed(2) + " °F");
		break;

	}
}