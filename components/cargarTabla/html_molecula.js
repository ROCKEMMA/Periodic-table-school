const htmlMolecula = (elemento) => {
    const molecula = document.createElement('div');
    let categoria = elemento.serie.trim().replace(/\s+/g, '');

    let masas = [1.00797, 33.56264, 66.11731, 98.67198, 131.22665, 163.78132, 196.33599, 228.89066, 261.44533, 294.00000];

    let tamanno = 0;

    if (limpiarUnidad(elemento.masa) <= masas[0]) {
        tamanno = "tamanno1";
    }else if(limpiarUnidad(elemento.masa) <= masas[1]){
        tamanno = "tamanno2";
    }else if(limpiarUnidad(elemento.masa) <= masas[2]){
        tamanno = "tamanno3";
    }else if(limpiarUnidad(elemento.masa) <= masas[3]){
        tamanno = "tamanno4";
    }else if(limpiarUnidad(elemento.masa) <= masas[4]){
        tamanno = "tamanno5";
    }else if(limpiarUnidad(elemento.masa) <= masas[5]){
        tamanno = "tamanno6";
    }else if(limpiarUnidad(elemento.masa) <= masas[6]){
        tamanno = "tamanno7";
    }else if(limpiarUnidad(elemento.masa) <= masas[7]){
        tamanno = "tamanno8";
    }else if(limpiarUnidad(elemento.masa) <= masas[8]){
        tamanno = "tamanno9";
    }else if(limpiarUnidad(elemento.masa) <= masas[9]){
        tamanno = "tamanno10";
    }
    
    molecula.className = `molecula ${categoria} ${tamanno}`;
    molecula.innerHTML = elemento.simbolo;

    return molecula;
}

export {htmlMolecula};

/* {
        nombre:'Hidrógeno',
        electrones: 1,
        serie:'no metales',
        simbolo:'H',
        masa: '1,00797',
        descubridor:'Boyle en 1671'
    } */


function limpiarUnidad(str) {
    const espacioIdx = str.indexOf(' ');

    if (espacioIdx !== -1) {
        str = str.substring(0, espacioIdx);
    }

    str = str.replace(',', '.');

    const numero = parseFloat(str);

    return numero;
}
