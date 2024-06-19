import { informacion } from "./informacion/info.js";
import { calculo1 } from "./calculo_1/calculo1.js";
import { calculo2 } from "./calculo_2/calculo2.js";
import { calculo3 } from "./calculo_3/calculo3.js";
import { calculo4 } from "./calculo_4/calculo4.js";
function cargarCalculadora(tabla) {
    let secc_cal = document.getElementById('seccion-calculadora');
    secc_cal.innerHTML = `
        <div class="moleculaC"></div>
        <div class="content_cal" id="caja_mol">
            <div class="botens_C">
                <div class="btnMol" id="btnM1">Informacion</div>
                <div class="btnMol" id="btnM2">Calculo 1</div>
                <div class="btnMol" id="btnM3">Calculo 2</div>
                <div class="btnMol" id="btnM4">Calculo 3</div>
                <div class="btnMol" id="btnM5">Calculo 4</div>
            </div>
            <div class="info_mol">
                <div class="bloque" id="bloque1" style="display: none;"></div>
                <div class="bloque" id="bloque2" style="display: none;"></div>
                <div class="bloque" id="bloque3" style="display: none;"></div>
                <div class="bloque" id="bloque4" style="display: none;"></div>
                <div class="bloque" id="bloque5" style="display: none;"></div>
            </div>
        </div>
    `;

    informacion()
    calculo1()
    calculo2()
    calculo3()
    calculo4()

        }

export { cargarCalculadora };
