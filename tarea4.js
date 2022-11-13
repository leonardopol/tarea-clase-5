//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

function crearLista(numeros){

    for(let i = 0; i < numeros.length; i++){
        nuevoLi[i] = document.createElement("li");
        textoLi[i] = document.createTextNode(`${numeros[i]}`);
        nuevoLi[i].appendChild(textoLi[i]);
        nuevoOl.appendChild(nuevoLi[i]);
    }
}

function convertirLista(lista){
    
    let RegExp = /(\d+)/g; //lo consegui de internet
    let listaNumeros = lista.match(RegExp);
    return listaNumeros;
}

let suma = 0;
function calcularPromedio(obtenerLista){
        for(let i = 0; i < obtenerLista.length; i++){
        suma = suma + Number(obtenerLista[i]);
        }
    return suma / obtenerLista.length;
}

function visualizarPromedio(promedio){
    const muestraPromedio = document.querySelector("#em1");
    muestraPromedio.textContent = `El promedio es: ${promedio}`;
}

function visualizarPequenio(obtenerLista){
    let peque = 1000000000000;
    const pequenio = document.querySelector("#em2");
    for(let i = 0; i < obtenerLista.length; i++){
        if(obtenerLista[i] < peque){
            peque = obtenerLista[i];
        }
    }
    pequenio.textContent = `El mas pequeño es: ${peque}`;
}

function visualizarGrande(obtenerLista){
    let big = -10000000000000;
    const grande = document.querySelector("#em3");
    for(let i = 0; i < obtenerLista.length; i++){
        if(obtenerLista[i] > big){
            big = obtenerLista[i];
        }
    }
    grande.textContent = `El mas grande es: ${big}`;
}

const nodoPagina = document.querySelector("body");
const nuevoDivPrincipal = document.createElement("div");
nuevoDivPrincipal.id = "#principal";
const nuevoOl = document.createElement("ol");
nuevoOl.id = "#lista";

const numeros = [680,235,121,400,235,128,235];
const nuevoLi = [];
const textoLi = [];

crearLista(numeros);

nuevoDivPrincipal.appendChild(nuevoOl);
nodoPagina.appendChild(nuevoDivPrincipal);

let lista = document.querySelector("ol").innerText;

const obtenerLista = convertirLista(lista);
const promedio = calcularPromedio(obtenerLista);
const mostrarPromedio = visualizarPromedio(promedio);
const mostrarPequenio = visualizarPequenio(obtenerLista);
const mostrarGrande = visualizarGrande(obtenerLista);

