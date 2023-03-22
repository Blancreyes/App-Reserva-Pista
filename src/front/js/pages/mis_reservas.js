import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/component.css";
import { useNavigate } from "react-router-dom";

export const Mis_reservas = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const [instalacion, setInstalacion] = useState("");
  const [dia, setDia] = useState("");
  const [hora, setHora] = useState("");

  // const hadleName = (e) => {
  //   e.preventDefault();
  //   setName(e.target.value);
  // };

  // const hadleLastname = (e) => {
  //   e.preventDefault();
  //   setLastname(e.target.value);
  // };

  // const hadleEmail = (e) => {
  //   e.preventDefault();
  //   setEmail(e.target.value);
  // };

  // const hadlePassword = (e) => {
  //   e.preventDefault();
  //   setPassword(e.target.value);
  // };

  // async function handleAltaUsuario(e) {
  //   e.preventDefault();
  //   let alta = false;
  //   alta = await actions.altaUsuario(name, lastname, email, password);
  //   console.log("alta:", alta);
  //   if (alta) {
  //     setName("");
  //     setEmail("");
  //     setLastname("");
  //     setPassword("");
  //     alert("Usuario creado correctamente");
  //     navigate("/acceso");
  //   } else alert("Hubo un problema no ha podido crearse el usuario");
  // }

  return (
    <div className="container-lg">
      <div className="fw-bold text-center fs-2 mt-3 mb-0"> MIS RESERVAS </div>{" "}
      <div className="row g-3 mt-0 mb-4  ">
        <div className="col-1"></div>
        <div className="col ">
          <span className="input-group-text fs-5 justify-content-center fw-bold">
            {" "}
            INSTALACIÓN{" "}
          </span>{" "}
        </div>{" "}
        <div className="col ">
          <span className="input-group-text fs-5 justify-content-center fw-bold">
            {" "}
            DÍA{" "}
          </span>{" "}
        </div>{" "}
        <div className="col">
          <span className="input-group-text fs-5 justify-content-center fw-bold">
            {" "}
            HORA{" "}
          </span>{" "}
        </div>{" "}
        <div className="col-1"></div>
      </div>{" "}
      <div className="row g-4 my-4">
        <div className="col-1"></div>
        <div className="col">
          <input
            type="text"
            className="form-control"
            id="apellidos"
            value={instalacion}
          />{" "}
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
        <div className="col">
          <input
            type="text"
            className="form-control"
            id="apellidos"
            value={instalacion}
          />{" "}
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
        <div className="col">
          <input
            type="text"
            className="form-control"
            id="apellidos"
            value={instalacion}
          />{" "}
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
      <div className="d-grid gap-2 col-5 mx-auto my-3">
        <button
          id="boton-guardar"
          className="btn btn-success  fw-bold"
          type="button"
          //onClick={handleAltaUsuario}
        >
          CALENDARIO{" "}
        </button>{" "}
      </div>{" "}
    </div>
  );
};
