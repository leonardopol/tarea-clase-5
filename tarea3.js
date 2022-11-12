//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

let indice = -1;
let horas = 0;
let minutos = 0;
let segundos = 0;

document.querySelector("#resultado").value = `00 h 00 min 00 s"`;

document.querySelector("#boton-agregar").onclick = function(){
    indice ++;

    const $numeroDeVideo = Number(document.querySelector("#numero-video").value);
    const $horas = Number(document.querySelector("#horas").value);
    const $minutos = Number(document.querySelector("#minutos").value);
    const $segundos = Number(document.querySelector("#segundos").value);

    const nodoPagina = document.querySelector("body");
    const nuevoDiv = document.createElement("div");
    const nuevoParrafo = document.createElement("p");
    const textoParrafo = document.createTextNode(`Video ${$numeroDeVideo} duración:`);

    nuevoDiv.id = `mostrar-resultados${Number(indice)}`;

    const nuevoInputHoras = document.createElement("input");
    nuevoInputHoras.type = "text";
    nuevoInputHoras.id = `horas${Number(indice)}`;
    nuevoInputHoras.value = `${$horas} h ${$minutos} min ${$segundos} s"`;
    nuevoInputHoras.disabled = true;

    horas = horas + $horas;
    minutos = minutos + $minutos;
    segundos = segundos + $segundos;
    
    nuevoParrafo.appendChild(textoParrafo);
    nuevoParrafo.appendChild(nuevoInputHoras);
    nodoPagina.appendChild(nuevoDiv);
    nuevoDiv.appendChild(nuevoParrafo);

    document.querySelector("#numero-video").value = null;
    document.querySelector("#horas").value = null;
    document.querySelector("#minutos").value = null;
    document.querySelector("#segundos").value = null;
    
}

document.querySelector("#boton-calcular").onclick = function(){
   
    document.querySelector("#resultado").value = `${horas} h ${minutos} min ${segundos} s"`;

}
