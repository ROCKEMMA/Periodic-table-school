const item_html = (elemento) => {
    // Crear el contenedor principal del elemento
    const element = document.createElement('div');
    element.className = 'element';

    // Crear y añadir el número atómico (electrones)
    const atomicNumberDiv = document.createElement('div');
    atomicNumberDiv.className = 'atomic-number';
    atomicNumberDiv.textContent = elemento.electrones;
    element.appendChild(atomicNumberDiv);

    // Crear y añadir el símbolo
    const symbolDiv = document.createElement('div');
    symbolDiv.className = 'symbol';
    symbolDiv.textContent = elemento.simbolo;
    element.appendChild(symbolDiv);

    // Crear y añadir el nombre
    const nameDiv = document.createElement('div');
    nameDiv.className = 'name';
    nameDiv.textContent = elemento.nombre;
    element.appendChild(nameDiv);

    // Crear y añadir el peso atómico (masa)
    const atomicWeightDiv = document.createElement('div');
    atomicWeightDiv.className = 'atomic-weight';
    atomicWeightDiv.textContent = elemento.masa;
    element.appendChild(atomicWeightDiv);

    return element;
};

export { item_html }