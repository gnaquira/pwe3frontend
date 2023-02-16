import React from 'react'

const ListaPlatos = () => {
    return (
        <div class="container">
        <br/>
            <div class="row" id="titulo">
                <h1>Listado de Platos</h1>
            </div>
            <div id="lista">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="dropdown">
                            <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Escoger Categoria de Plato
                            </button>
                            <ul class="dropdown-menu">
                                <li><button class="dropdown-item" type="button">Pizza</button></li>
                                <li><button class="dropdown-item" type="button">Ensaladas</button></li>
                                <li><button class="dropdown-item" type="button">Pastas</button></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr/>
                    <div class="row">
                        <table class="table table-warning table-hover">
                            <thead>
                                <tr>
                                    <th >#</th>
                                    <th >Nombre</th>
                                    <th >Descripcion</th>
                                    <th >Precio</th>
                                    <th>Imagen</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>1</th>
                                    <td>Ensalada Fresca</td>
                                    <td>Descripcion Ensalada Fresca</td>
                                    <td>$45 / $55</td>
                                    <td><img src="../Galeria/01.jpg" alt="" width="200" height="200"/></td>
                                </tr>
                                <tr>
                                    <th>2</th>
                                    <td>Pizza Arte</td>
                                    <td>Descripción Pizza Arte</td>
                                    <td>$65 / $70</td>
                                    <td><img src="../Galeria/02.jpg" alt="" width="200" height="200"/></td>
                                </tr>
                                <tr>
                                    <th>3</th>
                                    <td>Pollo en tiras con salsa bechamel</td>
                                    <td>Descripción Pollo en tiras con salsa bechamel</td>
                                    <td>$30.50</td>
                                    <td><img src="../Galeria/03.jpg" alt="" width="200" height="200"/></td>
                                </tr>
                                <tr>
                                    <th>4</th>
                                    <td>Pasta Bon Dia</td>
                                    <td>Descripcion Pasta Bon Dia</td>
                                    <td>$25.50</td>
                                    <td><img src="../Galeria/04.jpg" alt="" width="200" height="200"/></td>
                                </tr>
                                <tr>
                                    <th>5</th>
                                    <td>Especial de Pollo</td>
                                    <td>Descripcion Especial de Pollo</td>
                                    <td>$80.25</td>
                                    <td><img src="../Galeria/05.jpg" alt="" width="200" height="200"/></td>
                                </tr>
                                <tr>
                                    <th>6</th>
                                    <td>Especial de la Casa</td>
                                    <td>Descripcion Especial de la Casa</td>
                                    <td>$20 / $40 / $60</td>
                                    <td><img src="../Galeria/06.jpg" alt="" width="200" height="200"/></td>
                                </tr>
                                <tr>
                                    <th>7</th>
                                    <td>Ensalada Griega</td>
                                    <td>Descripción Ensalada Griega</td>
                                    <td>$94</td>
                                    <td><img src="../Galeria/07.jpg" alt="" width="200" height="200"/></td>
                                </tr>
                                <tr>
                                    <th>8</th>
                                    <td>Gyozas al vapor </td>
                                    <td>Descripción Gyozas al vapor</td>
                                    <td>$15</td>
                                    <td><img src="../Galeria/08.jpg" alt="" width="200" height="200"/></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
            </div>
        </div>
    )
}

export default ListaPlatos