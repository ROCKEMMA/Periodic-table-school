import { cargarInformacion } from "./cargarInformaciom.js";
import { item_html } from "./html_elemento.js";

function cargarTabla(tabla) {
    let tabla_DOM = document.querySelector("#seccion-tabla");

    // Limpiar cualquier contenido existente
    tabla_DOM.innerHTML = '';

    let div_vacio = document.createElement('div');
    div_vacio.className = "div-vacio";
    tabla_DOM.appendChild(div_vacio);

    let div_informacion = document.createElement('div');
    tabla_DOM.appendChild(div_informacion);
    div_informacion.className="informacion";

    let div_informacion2 = document.createElement('div');
    tabla_DOM.appendChild(div_informacion2);
    div_informacion2.className = "informacion2";

    tabla.forEach(elemento => {
        const elementHTML = item_html(elemento);
        elementHTML.classList.add(elemento.nombre);
        tabla_DOM.appendChild(elementHTML);
        let claseDelElemento = document.querySelector(`.${elemento.nombre}`)
        claseDelElemento.addEventListener("click", ()=>{cargarInformacion(elemento)});
    });
}


export { cargarTabla }