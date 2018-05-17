var b = 2; 
a = b++; // x++ renvoie la valeur initiale, incrémente ensuite
console.log(a);//a = 2
console.log(b); //b = 3 

var b = 2; 
a = ++b;// ++x renvoie la valeur incrémentéé
console.log(a);//a = 3
console.log(b);//b = 3

var b = 2; 
a = b--;// x-- renvoie la valeur initiale, décrémente ensuite
console.log(a);//a = 2
console.log(b);//b = 1

var b = 2; 
a = --b; // --x renvoie la valeur décrémentée
console.log(a); // a = 1
console.log(b);// b = 1

var b = 2; 
a+=b++; // x+ détermine le signe de la valeur
console.log(a);//a = 3
console.log(b); // b = 3



var b = 2;
a=1; a+=++b; //a = a + (++b)
console.log(a);//a = 4
console.log(b);// b = 3

var b = 2;
a=1; a-=b++;// a = a - (b++)
console.log(a);// a = -1
console.log(b);// b = 3

var b = 2; 
a=1; a-=++b;// a = a -(++b)
console.log(a);// a = -2
console.log(b);// b = 3


var b = 2;
a=1; a+=b--;// a = a + (b--)
console.log(a);// a = 3
console.log(b);// b = 1


var b = 2;
a=1; a+=--b;// a = a + (--b)
console.log(a);//a = 2
console.log(b);// b = 1