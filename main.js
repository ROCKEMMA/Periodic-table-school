let DOM = document.getElementById("root");

DOM.innerHTML = `
    <header id="header"></header>
    <section id="seccion-tabla"></section>
    <section id="seccion-calculadora"></section>
    <footer id="footer"></footer>
`;


/* CARGAR COMPONENTES */
cargarHeader();
cargarTabla();
cargarCalculaora();
cargarFooter();