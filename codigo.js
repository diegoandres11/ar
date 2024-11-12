
//let nombre = prompt("introduce tu nombre");
//alert("hola "+nombre);

//numero1=10;
//numero2=5;
//let saludo, pregunta;
//saludo="hola pedro!, ";
//pregunta="como poronga estas?";


//numero2=numero2+1;
//resultado=numero2;
//alert(resultado);


//frase=saludo+pregunta;
//document.write(frase);

//evalua, si numero1 es igual a numero2 y devuelve un boolean
//document.write(numero1==numero2);

//devuelve un valor booleano que respresenta si son diferentes(true) o no(false)
//document.write(numero1!=numero2);

//evalua si tienen el mismo valor y tambien si son el mismo tipo de valor, osea que ambos son de tipo int y tienen el mismo valor
//document.write(numero1===numero2);

//condicionales
//if(nombre=="diego"){
//	document.write("GOOOOLLLLLL");
//}else if(nombre=="andres"){
//	document.write("NOOOOOOO");
//}else{
//	document.write("no soy yo");
//}

//3 chicos quieren comprar un helado, ellos quieren comprar el helado mas caro; cada uno tiene distintas cantidades de dinero y hay una tabla
//en la que podemos basarnos para saber el costo de cada helado

let valorHelado1=100;
let valorHelado2=120;
let valorHelado3=140;
let valorHelado4=160;
let valorHelado5=180;
let masCaro=valorHelado1;
let vuelto;

let dinero=prompt("ingrese el dinero que tiene disponible: ");

if(masCaro<valorHelado2 && valorHelado2<=dinero){
	masCaro=valorHelado2;
}
if(masCaro<valorHelado3 && valorHelado3<=dinero){
	mascaro=valorHelado3;
}
if(masCaro<valorHelado4 && valorHelado4<=dinero){
	masCaro=valorHelado4;
}
if(masCaro<valorHelado5 && valorHelado5<=dinero){
	mascaro=valorHelado5
}

vuelto=dinero-masCaro;

document.write("su helado cuesta: "+masCaro);
document.write("su vuelto es de: "+vuelto);





//if(dinero>=(valorBoleto*3){
//	vuelto=dinero-valorBoleto;
//	alert("COMPRO 2 VOLETAS");
//	alert("y les regalo "+vuelto);
//}else if (dinero>=(valorBoleto*2)) {
//	alert("COMPRO 2 VOLETOS");
//	vuelto=dinero-valorBoleto;
//	alert("mi vuelto es de "+vuelto);
//}else if (dinero>=valorBoleto) {
//	alert("COMPRO UN VOLETO");
//	vuelto=dinero-valorBoleto;
//	alert("mi vuelto es de "+vuelto);
//}else{
//	alert("SOY UN PROBRE DE MIERDA NO ME ALCANA PARA PUTA MADRE");
//}

let w=5;
while(w<10){
	alert("hola"+w);
	w++
}

let arry={
	a:["david","diego","ale"],
	b:["serna","ostin","dos"],
	c:["y","r","t","u"],
	d:["w","o"]
}



let array=["w","g","t","y","u","n","a"];
buscarImparesArray(array);

function buscarImparesArray(array){
	e= array.length;
	alert(e);
	for(let i=0; i<e; i++){
		alert(array[i]);
	}
}


//cuando una funcion esta dentro de una clase se le llama metodo
class animal{
	constructor(raza,peso,color){
		this.color=color;
		this.peso=peso;
		this.raza=raza;
	}

	comer(raza){
		alert("el "+raza+" esta comiendo");
	}

	// una funcion static es aquella que no necesita tener el objeto creado para ser utilizada y por ende no utiliza ningun atributo ej:
	static dormir(){
		// no utiliza ningun atribito por eso es staticas
		alert("*cimenza a dormir*");
	}

}

//el perro es hijo del animal por eso extiende de la clase animal y por eso una objeto de la clase perro tambien tiene los atributos de animal y puede hacer uso de los metodos de la clase animal
class perro extends animal{
	constructor(raza,peso,color,años){
		super(raza,peso,color)
		this.raza=raza;
		this.peso=peso;
		this.color=color;
		this.años=años;
	}
	static ladrar(){
		alert("guaaww");
	}
}

perro1= new perro("perro",12,"negro",3);

//al ser clase perro hijo de animal puede utilzar sus metodos
perro1.comer("perro");


let arrayt=["perro","gato","loro","pez","oso"]
let nom=["luis","carlos","diego","jorge"];
	


//recorre el indice de el array osea la variable animal comienza en 0 y va recorriendo
for(animal in arrayt){
	alert(animal);
}


//recorre los elementos del arreglo, no el indice
for(nombre of nom){
	alert(nombre)
}

let palabra="holaaa diegooo como estas";
if(palabra.includes("diego")){
	alert("si soy yo ");
}else{
	alert("NO soy yo");
}

document.write(arrayt.pop());

let numeros=[1,2,3,4,5,6,7,8,9,10];

alert(numeros[Math.random()*10]);

alert(Math.sqrt(34));

