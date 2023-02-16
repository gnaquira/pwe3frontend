import React from 'react';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    
    <div class="container">
    <div>
    <header>
      <img src="background-imagen-restaurante.jpg" alt="" width="100%" height="500px" />
    </header>
    <nav class="navbar navbar-expand-md navbar-light bg-warning d-flex justify-content-center" id="barra_navbar">
      <ul class="navbar-nav mr-auto">
        <li class="nav-link"><Link to='/' class="nav-link text-white my-2 mx-5">Inicio</Link></li>
        <li class="nav-link"><Link to='page' class="nav-link text-white my-2 mx-5">Registro de Platos Usuario:(Admin)</Link></li>
        <li class="nav-link"><Link to='login' class="nav-link text-white my-2 col-mx-5 offset-md-5">Login</Link></li>
      </ul>
    </nav>
  </div>
    <main>
        <header class="row bienvenidos">
            <h2 class="col-12 text-center tm-section-title">Bienvenid@s a NombreRestaurante</h2>
        </header>
        
        <div class="menucategorias">
            <nav>
                <ul>
                    <li class="elementoscategorias"><Link to='/' class="itemcategorias active">Pizza</Link></li>
                    <li class="elementoscategorias"><Link to='/' class="itemcategorias">Ensalada</Link></li>
                    <li class="elementoscategorias"><Link to='/' class="itemcategorias">Fideos</Link></li>
                </ul>
            </nav>
        </div>
        <div class="row tm-gallery">
            <div id="tm-gallery-page-pizza" class="tm-gallery-page">
                <article class="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
                    <figure>
                        <img src="../Galeria/01.jpg" alt="img" class="img-fluid tm-gallery-img" />
                        <figcaption>
                            <h4 class="tm-gallery-title">Ensalada Fresca</h4>
                            <p class="tm-gallery-description">Descripcion Ensalada</p>
                            <p class="preciomenu">$45 / $55</p>
                        </figcaption>
                    </figure>
                </article>
                <article class="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
                    <figure>
                        <img src="../Galeria/02.jpg" alt="img" class="img-fluid tm-gallery-img" />
                        <figcaption>
                            <h4 class="tm-gallery-title">Pizza Arte</h4>
                            <p class="tm-gallery-description">Descripción Pizza</p>
                            <p class="preciomenu">$65 / $70</p>
                        </figcaption>
                    </figure>
                </article>
                <article class="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
                    <figure>
                        <img src="../Galeria/03.jpg" alt="img" class="img-fluid tm-gallery-img" />
                        <figcaption>
                            <h4 class="tm-gallery-title">Pollo en tiras con salsa bechamel</h4>
                            <p class="tm-gallery-description">Descripción Pollo</p>
                            <p class="preciomenu">$30.50</p>
                        </figcaption>
                    </figure>
                </article>
                <article class="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
                    <figure>
                        <img src="../Galeria/04.jpg" alt="img" class="img-fluid tm-gallery-img" />
                        <figcaption>
                            <h4 class="tm-gallery-title">Pasta Bon Dia</h4>
                            <p class="tm-gallery-description">Descripción Pasta</p>
                            <p class="preciomenu">$25.50</p>
                        </figcaption>
                    </figure>
                </article>
                <article class="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
                        <img src="../Galeria/05.jpg" alt="img" class="img-fluid tm-gallery-img" />
                        <figcaption>
                            <h4 class="tm-gallery-title">Especial de Pollo</h4>
                            <p class="tm-gallery-description">Descripción Especial</p>
                            <p class="preciomenu">$80.25</p>
                        </figcaption>
                </article>
                <article class="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
                        <img src="../Galeria/06.jpg" alt="img" class="img-fluid tm-gallery-img" />
                        <figcaption>
                            <h4 class="tm-gallery-title">Especial de la Casa</h4>
                            <p class="tm-gallery-description">Descripción Especial</p>
                            <p class="preciomenu">$20 / $40 / $60</p>
                        </figcaption>
                </article>
                <article class="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
                    <figure>
                        <img src="../Galeria/07.jpg" alt="img" class="img-fluid tm-gallery-img" />
                        <figcaption>
                            <h4 class="tm-gallery-title">Ensalada Griega</h4>
                            <p class="tm-gallery-description">Descripción Ensalada </p>
                            <p class="preciomenu">$94</p>
                        </figcaption>
                    </figure>
                </article>
                <article class="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
                        <img src="../Galeria/08.jpg" alt="img" class="img-fluid tm-gallery-img" />
                        <figcaption>
                            <h4 class="tm-gallery-title">Gyozas al vapor</h4>
                            <p class="tm-gallery-description">Descripción Gyozas</p>
                            <p class="preciomenu">$15</p>
                        </figcaption>
                </article>
            </div>
        </div>
        <div class="tm-section tm-container-inner">
            <div class="row">
                <div class="col">
                    <figure class="tm-description-figure">
                        <img src="../img-01.jpg" alt="img" class="img-fluid" />
                    </figure>
                </div>
                <div class="col">
                    <div class="tm-description-box"> 
                        <h4 class="tm-gallery-title">Porción de palta gratis con cualquier pedido!</h4>
                        <p class="tm-mb-45">Descripción promoción</p>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <Footer/>
    </div>
  )
}

export default Home