import React from "react";

export const Alta_usuario = () => {
  return (
    <div className="container-lg">
      <div className="fw-bold text-center fs-2 mt-3 mb-0">DATOS USUARIO</div>
      <div className="row g-3 mt-0 mb-4">
        <div className="col">
          <span className="input-group-text fs-5">NOMBRE</span>
        </div>
        <div className="col">
          <input type="text" className="form-control" />
        </div>
      </div>
      <div className="row g-4 my-4">
        <div className="col">
          <span className="input-group-text fs-5">APELLIDOS</span>
        </div>
        <div className="col">
          <input type="text" className="form-control" />
        </div>
      </div>
      <div className="row g-4 my-4">
        <div className="col">
          <span className="input-group-text fs-5">CORREO ELECTÓNICO</span>
        </div>
        <div className="col">
          <input type="text" className="form-control" />
        </div>
      </div>
      <div className="row g-4 my-4">
        <div className="col">
          <span class="input-group-text fs-5">CONTRASEÑA</span>
        </div>
        <div className="col">
          <input type="text" className="form-control" />
        </div>
      </div>
      <div className="d-grid gap-2 col-5 mx-auto my-3">
        <button className="btn btn-success  fw-bold" type="button">
          GUARDAR
        </button>
      </div>
      <div className=" d-flex justify-content-center">
        <button className="col-2 btn btn-success me-md-2 fw-bold" type="button">
          EDITAR
        </button>
        <button className="col-2 btn btn-success fw-bold" type="button">
          BAJA
        </button>
      </div>
    </div>
  );
};
