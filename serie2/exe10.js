function somme(){
	var total = 0; 
	for(i=0; i<3; i++){
		var p = prompt("Encodez un nombre"); 
		total+=Number(p);
	}alert(total);
}