import { listaTablero } from "../../utils/listaVacia.js";
import { item_html } from "./html_elemento.js";
function cargarInformacion(nombreElemento) {
    let divElementoCentral = document.querySelector(".informacion");
    
    // Vaciar el contenido existente
    divElementoCentral.innerHTML = '';
    
    // Crear el nuevo contenido
    let div_elemento = document.createElement("div");
    div_elemento.className = "estiloElemento";
    div_elemento.innerHTML = `
    <div><strong>Símbolo:</strong>${nombreElemento.simbolo}</div>
    <div><strong>Electrones:</strong> ${nombreElemento.electrones}</div>
    <div><strong>Masa:</strong> ${nombreElemento.masa}</div>
    <div><strong>Nombre:</strong> ${nombreElemento.nombre}</div>
    <div><strong>Serie:</strong> ${nombreElemento.serie}</div>
    <div><strong>Descubridor:</strong> ${nombreElemento.descubridor}</div>
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
        console.log(listaTablero);
        actualizarMoleculaC(listaTablero)
        
}

function actualizarMoleculaC(listaTablero){

    let molecula = document.querySelector(".moleculaC");
    molecula.innerHTML = ""
        listaTablero.forEach(element => {
            molecula.appendChild(item_html(element))
            
            
        });
}
export { agregarAlTablero,  cargarInformacion}

