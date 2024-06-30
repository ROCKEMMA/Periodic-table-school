function calculo4() {
    let btn5 = document.getElementById('btnM5');
    btn5.addEventListener("click", () => {
        document.querySelectorAll('.bloque').forEach(bloque => {
            bloque.innerHTML = '';
            bloque.style.display = 'none';
        });
        let bloque5 = document.getElementById('bloque5');
        bloque5.style.display = 'grid';
        bloque5.innerHTML = `
        <h2>CALCULO4</h2>
        `
    })
}
export { calculo4 }