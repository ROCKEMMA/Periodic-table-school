function cargarInformacion(nombreElemento) {
    let link = document.createElement("link");
    let divElementoCentral = document.querySelector(".informacion");
    
    // Vaciar el contenido existente
    divElementoCentral.innerHTML = '';
    
    // Crear el nuevo contenido
    let div_elemento = document.createElement("div");
    div_elemento.class = "estiloElemento"
    div_elemento.innerHTML = `
    <div><strong>Descubridor:</strong> ${nombreElemento.descubridor}</div>
    <div><strong>Electrones:</strong> ${nombreElemento.electrones}</div>
    <div><strong>Masa:</strong> ${nombreElemento.masa}</div>
    <div><strong>Nombre:</strong> ${nombreElemento.nombre}</div>
    <div><strong>Serie:</strong> ${nombreElemento.serie}</div>
    <div><strong>Símbolo:</strong> ${nombreElemento.simbolo}</div>
    `;
    divElementoCentral.appendChild(div_elemento);
    link.rel = "stylesheet";
    link.href ="components/cargarTabla/estiloElemento.css";
    document.head.appendChild(link);
}

export { cargarInformacion };