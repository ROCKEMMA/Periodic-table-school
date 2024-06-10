function cargarHeader() {

    let headerDOM = document.querySelector("#header");

    headerDOM.innerHTML = `

            <p>Tabla Periodica 2024</p>
            <nav>
                <ul>
                    <li><a href="#">Repositorio</a></li>
                    <li><a href="#">Integrantes</a></li>
                    <li><a href="#">Discord</a></li>
                    <li><a class="btn-git" href="https://github.com/ROCKEMMA/Periodic-table-school">Github</a></li>
                </ul>
            </nav>
    
    `
}

export {
    cargarHeader
}