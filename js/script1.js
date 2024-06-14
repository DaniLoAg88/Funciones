//FUNCIONES

// function sumar(){
//     let suma = 24 + 1;
//     console.log(suma);
// }

// function mostrar() {
//     console.log("Estoy dentro de mostrar, resultado:");
//     sumar();
// }

// sumar();

// console.log("***************************");

// mostrar();


//FUNCIONES CON PARÁMETROS

// let mensaje1 = "Hola Cristina";
// let mensaje2 = "Voy al médico";

// function mostrarMensaje(msj) {
//     alert(msj);
// }

// mostrarMensaje(mensaje1);
// mostrarMensaje(mensaje2);


//FUNCIONES CON RETORNO

// let numero = prompt("Escribe un número");

// function raizCuadrada(num) {
//     return Math.sqrt(num);
// }

// alert("La raíz cuadrada de " + numero + " es " + raizCuadrada(numero));


/****************************/


// let numeroPAR = prompt("Escribe un número");

// if(esPar(numeroPAR)){
//     alert("Su número " + numeroPAR + " es PAR");
// }else{
//     alert("Su número " + numeroPAR + " es IMPAR");
// }

//*********************************************************************** */
//Ejercicio... Pide 10 veces un número y muestra cada vez si es par o impar

// function pedirNumero() {
//     let numero = prompt("Introduzca un número");
//     return numero;
// }

// function esPar(num) {
//     if(num % 2 == 0){
//         return true;
//     } else{
//         return false;
//     }
// }

// function mostrarParImpar(num) {
//     if(esPar(num)){
//         alert("Su número " + num + " es PAR");
//     }else{
//         alert("Su número " + num + " es IMPAR");
//     }
// }

// for (let i = 1; i <= 10; i++){
//     mostrarParImpar(pedirNumero());
// }


// var numero1 = 7;
// var numero2 = 8;

// function numMenor(numero1,numero2) {
//     if(numero1 < numero2) return numero1
//     else return numero2
// }

// console.log(numMenor(numero1,numero2));


/******* EJERCICIOS PARA EXAMEN ********/

let mapa = new Map([["España","Madrid"],["Francia","Paris"],["Italia","Roma"],["Portugal", "Lisboa"]]);

let select = document.querySelector("#paises");

for(let [pais,capital] of mapa){ //****MEJOR MANERA DE RECORRER UN MAPA****
    let opcion = document.createElement("option");
    opcion.textContent = pais;
    opcion.setAttribute("id",pais);
    opcion.setAttribute("value",capital);
    select.appendChild(opcion);
}

select.addEventListener("change", function(){
    quitarBorde();
    //document.querySelector("#capital").innerHTML = "La capital es " + mapa.get(select.value);
    document.querySelector("#capital").innerHTML = "La capital es " + select.value;
    document.querySelector("#"+select.value).style.border="5px solid black";
})

let imagenes = document.querySelectorAll("img"); //Crea un Array con todas las imagenes del HTML

for (let i = 0; i < imagenes.length; i++) {

    imagenes[i].addEventListener("mouseover",function(){
        imagenes[i].style.width = "350px";
    })
    
    imagenes[i].addEventListener("mouseout",function(){
        imagenes[i].style.width = "300px";
    })
}

function quitarBorde() {
    for (let i = 0; i < imagenes.length; i++) {
        imagenes[i].style.border = "none";
        
    }
}