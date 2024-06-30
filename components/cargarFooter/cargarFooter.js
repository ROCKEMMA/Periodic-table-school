function cargarFooter(){
    
    let footerDOM = document.querySelector("#footer");

    footerDOM.innerHTML = `
    
    <div class="div-redes">
        <div class="logo-scl">
            <img src="https://github.com/Nyulian122/Imagenes_Portafolio/blob/main/Copia%20de%20LogoSCL-45.png?raw=true" alt="">
            <p class="logotipo">Colegio Santa Catarina Laboure</p>
        </div>
        <div class="redes">
            <a href="https://www.instagram.com/school_scl/"><img src="https://cdn.icon-icons.com/icons2/3941/PNG/512/instagram_insta_logo_icon_250828.png" alt="insta"></a>
            <a href="https://www.facebook.com/colegioSCL"><img src="https://cdn.icon-icons.com/icons2/790/PNG/512/fb_icon-icons.com_65434.png" alt="face"></a>
            <a href="https://www.scl.edu.gt/"><img src="https://cdn.icon-icons.com/icons2/1678/PNG/512/wondicon-ui-free-website_111210.png" alt="page_cole"></a>
        </div>
    </div>

    <div class="footer-informacion">
        <div>
            <h2>Desarrolladores</h2>
            <a href="#">Nyulian122</a>
            <a href="#">Zeth_x</a>
            <a href="#">GoDHydRax</a>
            <a href="#">JustinBRR88</a>
            <a href="#">ROCKEMMA</a>
        </div>
        <div>
            <h2>Tecnologias</h2>
            <a href="#">HTML</a>
            <a href="#">CSS</a>
            <a href="#">JS</a>
            <a href="#">Figma</a>
        </div>
    </div>
`
}

export { cargarFooter }