import { tabla_periodica } from "./utils/dataTabla.js";
import { cargarHeader } from "./components/cargarHeader/cargarHeader.js";
import { cargarTabla } from "./components/cargarTabla/cargarTabla.js";
import { cargarCalculadora } from "./components/cargarCalculadora/cargarCalculadora.js"
import { cargarFooter } from "./components/cargarFooter/cargarFooter.js";

let DOM = document.getElementById("root");

DOM.innerHTML = `
    <header id="header"></header>
    <section id="seccion-tabla"></section>
    <section id="seccion-calculadora"></section>
    <footer id="footer"></footer>
`;


let tabla = tabla_periodica;
console.log(tabla);

/* CARGAR COMPONENTES */
cargarHeader();
cargarTabla(tabla);
cargarCalculadora(tabla);
cargarFooter();