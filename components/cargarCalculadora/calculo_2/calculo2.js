function calculo2() {
    let btn3 = document.getElementById('btnM3');
    btn3.addEventListener("click", () => {
        document.querySelectorAll('.bloque').forEach(bloque => {
            bloque.innerHTML = '';
            bloque.style.display = 'none';
        });
        let bloque3 = document.getElementById('bloque3');
        bloque3.style.display = 'grid';
        bloque3.innerHTML = `
        <h2>CALCULO2</h2>
        `
    })
}
export { calculo2 }