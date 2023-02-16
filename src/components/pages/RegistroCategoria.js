import React from 'react'

const RegistroCategoria = () => {

    // let tb_data = 

    return (
        <div class="container">
            <br/>
            <div class="row" id="titulo">
                <h1>Registro de Categoria</h1>
            </div>
            <div id="registro">
                <form>
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="form-group">
                                <label for="exampleFormControlInput1" class="color">Nombre Categoria</label>
                                <input class="form-control" id="exampleFormControlInput1" placeholder="Nombre" />
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1" class="color">Descripcion</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                    </div>
                    <input class="btn btn-light" type="submit" value="Registrar categoria" id="Registrar_Categoria" />            </form>
            </div>
            <div id="lista">
                <hr />
                <div class="row">
                    <table class="table table-warning table-hover">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nombre Categoria</th>
                                <th>Descripcion</th>
                                <th>Accion</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>1</th>
                                <td>Pizza</td>
                                <td>Descripción categoría Pizza</td>
                                <td>
                                    <div class="d-flex flex-column mb-3">
                                    <button class="btn btn-primary">Editar</button>
                                    <button class="btn btn-danger">Eliminar</button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th>2</th>
                                <td>Ensalada</td>
                                <td>Descripción categoría Ensalada</td>
                                <td>
                                    <div class="d-flex flex-column mb-3">
                                    <button class="btn btn-primary">Editar</button>
                                    <button class="btn btn-danger">Eliminar</button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th>3</th>
                                <td>Pasta</td>
                                <td>Descripción categoría Pasta</td>
                                <td>
                                    <div class="d-flex flex-column mb-3">
                                    <button class="btn btn-primary">Editar</button>
                                    <button class="btn btn-danger">Eliminar</button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default RegistroCategoria