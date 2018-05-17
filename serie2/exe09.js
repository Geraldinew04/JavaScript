
function testWhile(){

	var p = prompt("Donne moi une chaine de caractère incluant la lettre p"); 
	
	while(!p.includes("p")){
		p = prompt("Donne moi une chaine de caractère incluant la lettre p"); 
	}

	alert("'" + p + "'");
}