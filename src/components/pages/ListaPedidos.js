import React from 'react';
import { useNavigate } from "react-router-dom";

const ListaPedidos = () => {
    const navigate = useNavigate();
    return (
        <div class="container">
            <br/>
            <div class="row" id="titulo">
                <h1>Lista de Pedidos Realizados</h1>
            </div>

            <div id="lista">
                <div class="row">
                    <table class="table table-warning table-hover">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nombre</th>
                                <th>Direccion</th>
                                <th>Cantidad</th>
                                <th>Imagen</th>
                                <th id="accion_pedido_realizado" class="col-md-4">Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>1</th>
                                <td>Ensalada Fresca</td>
                                <td>Dirección de entrega pedido 1</td>
                                <td>1</td>
                                <td><img src="../Galeria/01.jpg" alt="" width="100" height="100"/></td>
                                <td><button class="btn btn-warning" id="pedido_realizado">Cambiar a Preparacion</button></td>
                            </tr>
                            <tr>
                                <th>2</th>
                                <td>Pizza Arte</td>
                                <td>Dirección de entrega pedido 2</td>
                                <td>1</td>
                                <td><img src="../Galeria/02.jpg" alt="" width="100" height="100"/></td>
                                <td><button class="btn btn-warning" id="pedido_realizado">Cambiar a Preparacion</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="row" id="titulo">
                <h1>Pedidos en Preparacion</h1>
            </div>

            <div id="lista">
                <div class="row">
                    <table class="table table-warning table-hover">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nombre</th>
                                <th>Direccion</th>
                                <th>Cantidad</th>
                                <th>Imagen</th>
                                <th>Accion</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>1</th>
                                <td>Pollo en tiras con salsa bechamel</td>
                                <td>Direccion de entrega pedido en  preparacion 1</td>
                                <td>1</td>
                                <td><img src="../Galeria/03.jpg" alt="" width="100" height="100"/></td>
                                <td><button class="btn btn-success">Cambiar a Terminado</button></td>
                            </tr>
                            <tr>
                                <th>2</th>
                                <td>Pasta Bon Dia</td>
                                <td>Direccion de entrega pedido en  preparacion 2</td>
                                <td>1</td>
                                <td><img src="../Galeria/04.jpg" alt="" width="100" height="100"/></td>
                                <td><button class="btn btn-success">Cambiar a Terminado</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="row" id="titulo">
                <h1>Pedidos Terminado</h1>
            </div>

            <div id="lista">
                <div class="row">
                    <table class="table table-warning table-hover">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nombre</th>
                                <th>Direccion</th>
                                <th>Cantidad</th>
                                <th>Imagen</th>
                                <th>Accion</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>1</th>
                                <td>Especial de Pollo</td>
                                <td>Dirección de entrega pedido terminado 1</td>
                                <td>1</td>
                                <td><img src="../Galeria/05.jpg" alt="" width="100" height="100"/></td>
                                <td><a class="btn btn-light" href="RealizarPago.html">Registro Entrega</a></td>
                            </tr>
                            <tr>
                                <th>2</th>
                                <td>Especial de la Casa</td>
                                <td>Dirección de entrega pedido terminado 2</td>
                                <td>1</td>
                                <td><img src="../Galeria/06.jpg" alt="" width="100" height="100"/></td>
                                <td><button class="btn btn-light" onClick={() => navigate('../registroentrega') }>Registro Entrega</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ListaPedidos