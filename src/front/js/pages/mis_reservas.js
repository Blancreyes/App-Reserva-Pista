import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/component.css";
import { useNavigate } from "react-router-dom";

export const Mis_reservas = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const [piscinaDia, setPiscinaDia] = useState("");
  const [piscinaHora, setPiscinaHora] = useState("");

  const eliminarreservapiscina = (e) => {
    alert("Tu reserva para la piscina ha sido eliminada.");
    setPiscinaDia("");
    setPiscinaHora("");
  };
  const instalacionescalendario = () => {
    navigate("/demo");
  };

  async function handleRecuperarPassword(e) {
    let recover = await actions.recover_password(email);
    if (recover) {
      setEmail("");
      alert(
        "Se ha enviado un correo electrónico con las instrucciones para modificar la contraseña"
      );
      navigate("/acceso");
    }
  }

  return (
    <div className="container-lg">
      <div className="fw-bold text-center fs-2 mt-1 mb-0"> MIS RESERVAS </div>{" "}
      <div className="row g-3 mt-0 mb-4  ">
        <div className="col-1"></div>
        <div className="col ">
          <span
            id="color-fuente"
            className="input-group-text fs-4 justify-content-center fw-bold"
          >
            {" "}
            INSTALACIÓN{" "}
          </span>{" "}
        </div>{" "}
        <div className="col ">
          <span
            id="color-fuente"
            className="input-group-text fs-4 justify-content-center fw-bold"
          >
            {" "}
            DÍA{" "}
          </span>{" "}
        </div>{" "}
        <div className="col">
          <span
            id="color-fuente"
            className="input-group-text fs-4 justify-content-center fw-bold"
          >
            {" "}
            HORA{" "}
          </span>{" "}
        </div>{" "}
        <div className="col-1"></div>
      </div>{" "}
      <div className="row g-4 my-4">
        <div className="col-1"></div>
        <div className="col ">
          <span
            id="color-fuente"
            className="input-group-text fs-4 justify-content-center fw-normal"
          >
            {" "}
            PISCINA{" "}
          </span>{" "}
        </div>{" "}
        <div className="col">
          <input
            type="text"
            className="form-control"
            id="apellidos"
            value={piscinaDia}
          />{" "}
        </div>{" "}
        <div className="col">
          <input
            type="text"
            className="form-control"
            id="apellidos"
            value={piscinaHora}
          />{" "}
        </div>{" "}
        <div class="d-grid gap-1 d-md-block text-center col-1">
          <button
            class="btn btn-outline-danger fw-bold"
            type="button"
            onClick={eliminarreservapiscina}
          >
            ANULAR
          </button>
        </div>
      </div>{" "}
      {/* <div className="row g-4 my-4">
        <div className="col-1"></div>
        <div className="col ">
          <span
            id="color-fuente"
            className="input-group-text fs-4 justify-content-center fw-normal"
          >
            {" "}
            PISTA DE PADDLE{" "}
          </span>{" "}
        </div>{" "}
        <div className="col">
          <input
            type="text"
            className="form-control"
            id="apellidos"
            value={dia}
          />{" "}
        </div>{" "}
        <div className="col">
          <input
            type="text"
            className="form-control"
            id="apellidos"
            value={hora}
          />{" "}
        </div>{" "}
        <div class="d-grid gap-1 d-md-block text-center col-1">
          <button class="btn btn-outline-danger fw-bold" type="button">
            ANULAR
          </button>
        </div>
      </div>{" "}
      <div className="row g-4 my-4">
        <div className="col-1"></div>
        <div className="col ">
          <span
            id="color-fuente"
            className="input-group-text fs-4 justify-content-center fw-normal"
          >
            {" "}
            PISTA DE TENIS{" "}
          </span>{" "}
        </div>{" "}
        <div className="col">
          <input
            type="text"
            className="form-control"
            id="apellidos"
            value={dia}
          />{" "}
        </div>{" "}
        <div className="col">
          <input
            type="text"
            className="form-control"
            id="apellidos"
            value={hora}
          />{" "}
        </div>{" "}
        <div class="d-grid gap-1 d-md-block text-center col-1">
          <button class="btn btn-outline-danger fw-bold" type="button">
            ANULAR
          </button>
        </div>
      </div>{" "}
      <div className="row g-4 my-4">
        <div className="col-1"></div>
        <div className="col ">
          <span
            id="color-fuente"
            className="input-group-text fs-4 justify-content-center fw-normal"
          >
            {" "}
            CAMPO DE FUTBOL{" "}
          </span>{" "}
        </div>{" "}
        <div className="col">
          <input
            type="text"
            className="form-control"
            id="apellidos"
            value={dia}
          />{" "}
        </div>{" "}
        <div className="col">
          <input
            type="text"
            className="form-control"
            id="apellidos"
            value={hora}
          />{" "}
        </div>{" "}
        <div class="d-grid gap-1 d-md-block text-center col-1">
          <button class="btn btn-outline-danger fw-bold" type="button">
            ANULAR
          </button>
        </div>
      </div>{" "} */}
      <div className="d-grid gap-2 col-5 mx-auto my-3">
        <button
          id="boton-guardar"
          className="btn btn-success  fw-bold"
          type="button"
          onClick={instalacionescalendario}
        >
          INSTALACIONES / CALENDARIOS{" "}
        </button>{" "}
      </div>{" "}
    </div>
  );
};
