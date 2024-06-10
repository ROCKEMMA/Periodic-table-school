function cargarCalculadora(tabla) {
    let secc_cal = document.getElementById('seccion-calculadora');
    secc_cal.innerHTML = `
        <div class="moleculaC"></div>
        <div class="content_cal" id="caja_mol">
            <div class="botens_C">
                <div class="btnMol" id="btnM1">Calculo 1</div>
                <div class="btnMol" id="btnM2">Calculo 2</div>
                <div class="btnMol" id="btnM3">Calculo 3</div>
                <div class="btnMol" id="btnM4">Calculo 4</div>
                <div class="btnMol" id="btnM5">Calculo 5</div>
            </div>
            <div class="info_mol">
                <div class="bloque" id="bloque1" style="display: none;"><h2>H2O - fórmula química del agua</h2><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p></div>
                <div class="bloque" id="bloque2" style="display: none;"><h2>H21 - fórmula molecular del agua</h2><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p></div>
                <div class="bloque" id="bloque3" style="display: none;"><h2>H22 - fórmula química del agua</h2><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p></div>
                <div class="bloque" id="bloque4" style="display: none;"><h2>H23 - fórmula química del agua</h2><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p></div>
                <div class="bloque" id="bloque5" style="display: none;"><h2>H24 - fórmula química del agua</h2><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p></div>
            </div>
        </div>
    `;

    let bloques = document.querySelectorAll('.bloque');

    document.querySelectorAll('.btnMol').forEach((btn, index) => {
        btn.addEventListener("click", () => {
            bloques.forEach(bloque => {
                bloque.style.display = 'none';
            });
            bloques[index].style.display = 'grid';
        });
    });
}

export { cargarCalculadora };
