function cargarHeader(){
    
    let headerDOM = document.querySelector("#header");

    headerDOM.innerHTML = `

    <header>
        <div class="container">
            <div class="imagen">
            </div>
            <p>Tabla Periodica 2024</p>
            <nav>
                <ul>
                    <li><a href="#">Repositorio</a></li>
                    <li><a href="#">Integrantes</a></li>
                    <li><a href="#">Discord</a></li>
                    <li><a href="#">Github</a></li>
                </ul>
            </nav>
        </div>
    </header>
    
    `
}

export { cargarHeader }