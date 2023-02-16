import React from 'react'

const RegistroEntrega = () => {
  return (
    <div class="container d-flex justify-content-center">
      <div className='pb-5 mb-5' id='ancho'>
      <div class="row" id="titulo">
        <h1>Registrar Entrega</h1>
      </div>
      <div class="row">
        <form action="">
          <div class="row">
            <input type="text" class="form-control" placeholder="Ingresar Codigo de Verificacion"/>
          </div>
          <div class="row">
            <div class="col-lg-2" id="enviar">
              <button type="submit" class="btn btn-success" >
                Enviar
              </button>
            </div>

          </div>
        </form>
      </div>
      <div class="row mt-3">
        <div class="col-lg-12">
          <div class="alert alert-success" role="alert">
            Se realizo la entrega correctamente...
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default RegistroEntrega