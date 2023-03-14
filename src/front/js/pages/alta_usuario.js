import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/component.css";
import { useNavigate } from "react-router-dom";

export const Alta_usuario = () => {
  const { store, actions } = useContext(Context);
  const { email, setEmail } = useState();
  const { password, setPassword } = useState();
  const { name, setName } = useState();
  const { lastname, setLastname } = useState();
  const navigate = useNavigate();

  async function handleAltaUsuario(e) {
    e.preventDefault();
    let alta = actions.altaUsuario(name, lastname, email, password);
    if (alta) {
      setName("");
      setEmail("");
      setLastname("");
      setPassword("");
      alert("Usuario creado correctamente");
      navigate("/");
    }
  }

  return (
    <div className="container-lg">
      <div className="fw-bold text-center fs-2 mt-3 mb-0">DATOS USUARIO</div>
      <div className="row g-3 mt-0 mb-4">
        <div className="col">
          <span className="input-group-text fs-5">NOMBRE</span>
        </div>
        <div className="col">
          <input
            type="text"
            className="form-control"
            id="nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
        <button
          id="boton-guardar"
          className="btn btn-success  fw-bold"
          type="button"
          onClick={handleAltaUsuario}
        >
          GUARDAR
        </button>
      </div>
    </div>
  );
};
