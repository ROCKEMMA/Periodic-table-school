function calculo1() {
    let btn2 = document.getElementById('btnM2');
    btn2.addEventListener("click", () => {
        document.querySelectorAll('.bloque').forEach(bloque => {
            bloque.innerHTML = '';  
            bloque.style.display = 'none';  
        });
        let bloque2 = document.getElementById('bloque2');
        bloque2.style.display = 'grid';
        bloque2.innerHTML = `
            <h2>CALCULO1</h2>
        `
    });
}

export { calculo1 };
