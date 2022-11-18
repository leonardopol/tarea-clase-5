//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

function crearLista(numeros){

    for(let i = 0; i < numeros.length; i++){
        $nuevoLi[i] = document.createElement("li");
        $textoLi[i] = document.createTextNode(`${numeros[i]}`);
        $nuevoLi[i].appendChild($textoLi[i]);
        $nuevoOl.appendChild($nuevoLi[i]);
    }
}

function convertirLista(lista){
    
    let RegExp = /(\d+)/g; //lo consegui de internet
    let listaNumeros = lista.match(RegExp);
    return listaNumeros;
}

function calcularPromedio(obtenerLista){
        let suma = 0;
        for(let i = 0; i < obtenerLista.length; i++){
        suma = suma + Number(obtenerLista[i]);
        }
    return suma / obtenerLista.length;
}

function visualizarPromedio(promedio){
    const $muestraPromedio = document.querySelector("#em1");
    $muestraPromedio.textContent = `El promedio es: ${promedio}`;
}

function calcularPequenio(obtenerLista){
    let peque = 1000000000000;
    for(let i = 0; i < obtenerLista.length; i++){
        if(obtenerLista[i] < peque){
            peque = obtenerLista[i];
        }
    }
    return peque;
}

function visualizarPequenio(pequenio){
    const $pequenio = document.querySelector("#em2");
    $pequenio.textContent = `El mas pequeño es: ${pequenio}`;
}

function calcularGrande(obtenerLista){
    let big = -10000000000000;
    for(let i = 0; i < obtenerLista.length; i++){
        if(obtenerLista[i] > big){
            big = obtenerLista[i];
        }
    }
    return big;
}

function visualizarGrande(grande){
    const $grande = document.querySelector("#em3");
    $grande.textContent = `El mas grande es: ${grande}`;
}

function calcularMasRepetido(obtenerLista){

    let conservar = 0;
    let maximo = 1;
    let guardarNumero = [];
    let guardarConteo = [];
    
    for(let i = 0; i < obtenerLista.length; i++){
        let contador = 0;
        for(let j = 0; j < obtenerLista.length; j++){
            if(obtenerLista[i] === obtenerLista[j]){
                conservar = obtenerLista[i];
                if(conservar === obtenerLista[j]){
                    
                    guardarNumero[i] = conservar;
                    guardarConteo[i] = contador;
                    contador++;
                }
            }
        }
        if(guardarConteo[i] > maximo){
            maximo = guardarConteo[i];
            return guardarNumero[i];   
        }
    }
}

function visualizarMasRepetido(masRepetido){
    const $masRepetido = document.querySelector("#em4");
    $masRepetido.textContent = `El mas repetido es: ${masRepetido}`;
}

const numeros = [28,14,33,87,45,61,73,54,33,12,33];
const $nuevoLi = [];
const $textoLi = [];

const $nodoSeccion = document.querySelector("section");
const $nuevoDivPrincipal = document.createElement("div");
const $nuevoParrafo = document.createElement("p");
const $nuevoTextoParrafo = document.createTextNode("Numeros:");
const $nuevoOl = document.createElement("ol");
$nuevoDivPrincipal.id = "div-numeros";
$nuevoParrafo.id = "titulo-numeros";
$nuevoOl.id = "lista";

$nuevoDivPrincipal.appendChild($nuevoParrafo);
$nuevoParrafo.appendChild($nuevoTextoParrafo);
$nuevoDivPrincipal.appendChild($nuevoOl);
$nodoSeccion.appendChild($nuevoDivPrincipal);

crearLista(numeros);

const $lista = document.querySelector("ol").innerText;

const obtenerLista = convertirLista($lista);
const promedio = calcularPromedio(obtenerLista);
const pequenio = calcularPequenio(obtenerLista);
const grande = calcularGrande(obtenerLista);
const masRepetido = calcularMasRepetido(obtenerLista);
const mostrarPromedio = visualizarPromedio(promedio);
const mostrarPequenio = visualizarPequenio(pequenio);
const mostrarGrande = visualizarGrande(grande);
const mostrarMasRepetido = visualizarMasRepetido(masRepetido);

