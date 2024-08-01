import { listaTablero } from "../../utils/listaVacia.js";
import { htmlMolecula } from "./html_molecula.js";
function cargarInformacion(nombreElemento) {
    let divElementoCentral = document.querySelector(".informacion");
    
    // Vaciar el contenido existente
    divElementoCentral.innerHTML = '';
    
    // Crear el nuevo contenido
    let div_elemento = document.createElement("div");
    div_elemento.className = "estiloElemento";

    div_elemento.innerHTML = `
        <div class="estiloSimbolo"><strong class="estiloElemento1"></strong>${nombreElemento.simbolo}</div>
        <div class="estiloSimbolo2"><strong></strong> ${nombreElemento.electrones}</div>
        <div class="estiloSimbolo3"><strong></strong> ${nombreElemento.masa}</div>
        <div class="estiloSimbolo4"><strong></strong> ${nombreElemento.nombre}</div>
    `;
    
    divElementoCentral.appendChild(div_elemento);
    
    // Verificar si el link ya existe
    if (!document.querySelector("link[href='components/cargarTabla/estiloElemento.css']")) {
        let link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "components/cargarTabla/estiloElemento.css";
        document.head.appendChild(link);
    }
}


function agregarAlTablero(nombreElemento){
    listaTablero.push(nombreElemento);
    actualizarMoleculaC(listaTablero);
}

function actualizarMoleculaC(listaTablero){
    let molecula = document.querySelector(".moleculaC");
    molecula.innerHTML = ""
        listaTablero.forEach(element => {
            molecula.appendChild(htmlMolecula(element))
    });
}

export { agregarAlTablero,  cargarInformacion}

