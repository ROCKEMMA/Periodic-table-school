function cargarFooter(){
    
    let footerDOM = document.querySelector("#footer");

    footerDOM.innerHTML = `
    
    <footer class="footer">
        <div class="footer-container">
            <div class="footer-section">
                <h4>Tecnologias</h4>
                <p>HTML</p>
                <p>CSS</p>
                <p>JavaScript</p>
            </div>
            <div class="footer-section">
                <h4>Integrantes del grupo</h4>
                <ul>
                    <li><a href="#">Nyulian122</a></li>
                    <li><a href="#">ROCKEMMA</a></li>
                    <li><a href="#">JustinBRR88</a></li>
                    <li><a href="#">GoDHyDrax</a></li>
                    <li><a href="#">Zethx.e</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h4>Redes sociales</h4>
                <div class="social-links">
                    <a href="https://discord.gg/vYZBVFpk"><img src="https://img.icons8.com/?size=256&id=25627&format=png" alt="Discord"></a>
                    <a href="https://github.com/ROCKEMMA/Periodic-table-school"><img src="https://img.icons8.com/?size=256&id=12598&format=png" alt="Repositorio de github"></a>

                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; Colegio Santa Catarina Laboure</p>
        </div>
    </footer>
`
}

export { cargarFooter }