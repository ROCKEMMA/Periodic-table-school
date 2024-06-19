function calculo3() {
    let btn4 = document.getElementById('btnM4');
    btn4.addEventListener("click", () => {
        document.querySelectorAll('.bloque').forEach(bloque => {
            bloque.innerHTML = '';
            bloque.style.display = 'none';
        });
        let bloque4 = document.getElementById('bloque4');
        bloque4.style.display = 'grid';
        bloque4.innerHTML = `
        <h2>CALCULO3</h2>
        `
    })
}
export { calculo3 }
