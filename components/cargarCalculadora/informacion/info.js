function informacion() {
    let btn1 = document.getElementById('btnM1');
    btn1.addEventListener("click", () => {
        document.querySelectorAll('.bloque').forEach(bloque => {
            bloque.innerHTML = '';  
            bloque.style.display = 'none'; 
        });
        let bloque1 = document.getElementById('bloque1');
        bloque1.style.display = 'grid';
        bloque1.innerHTML = `
            <h2>INFORMACION</h2>
        `
    });
}

export { informacion };
