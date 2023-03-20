import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/component.css";
import { useNavigate } from "react-router-dom";

export const Restablecer_password = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [passwordValidacion, setPasswordValidacion] = useState("");

  const handlePassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };
  const handlePasswordValidacion = (e) => {
    e.preventDefault();
    setPasswordValidacion(e.target.value);
  };

  async function handleRestablecerPassword(e) {
    e.preventDefault();
    setPassword("");
    alert("Nueva contraseña establecida");
    navigate("/acceso");
  }

  return (
    <div className="container-lg">
      <div className="fw-bold text-center fs-2 mt-3 mb-0">
        RESTABLECER CONTRASEÑA
      </div>
      <div className="row g-3 mt-0 mb-4">
        <div className="row g-4 my-4">
          <div className="col">
            <span className="input-group-text fs-5"> NUEVA CONTRASEÑA </span>
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control text-center"
              value={password}
              onChange={handlePassword}
              placeholder={"INGRESA TU NUEVA CONTRASEÑA"}
            />
          </div>
        </div>
      </div>
      <div className="row g-3 mt-0 mb-4">
        <div className="row g-4 my-4">
          <div className="col">
            <span className="input-group-text fs-5">
              {" "}
              CONFIRMAR CONTRASEÑA{" "}
            </span>
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control text-center"
              value={passwordValidacion}
              onChange={handlePasswordValidacion}
              placeholder={"CONFIRMA TU NUEVA CONTRASEÑA"}
            />
          </div>
        </div>
      </div>
      <div className="d-grid gap-2 col-5 mx-auto my-3">
        <button
          id="boton-guardar"
          className="btn btn-success  fw-bold"
          type="button"
          onClick={handleRestablecerPassword}
          defaultValue={password}
        >
          ESTABLECER NUEVA CONTRASEÑA
        </button>
      </div>
    </div>
  );
};
