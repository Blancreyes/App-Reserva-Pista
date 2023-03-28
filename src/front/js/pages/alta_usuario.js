import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/component.css";
import { useNavigate } from "react-router-dom";

export const Alta_usuario = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const navigate = useNavigate();

  const hadleName = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const hadleLastname = (e) => {
    e.preventDefault();
    setLastname(e.target.value);
  };

  const hadleEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const hadlePassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  async function handleAltaUsuario(e) {
    e.preventDefault();
    let alta = false;
    alta = await actions.altaUsuario(name, lastname, email, password);
    console.log("alta:", alta);
    if (alta) {
      setName("");
      setEmail("");
      setLastname("");
      setPassword("");
      alert("Usuario creado correctamente");
      navigate("/acceso");
    } else alert("Hubo un problema no ha podido crearse el usuario");
  }

  return (
    <div className="container-lg vh-100">
      <div className="fw-bold text-center fs-2 mt-3 mb-0"> DATOS USUARIO </div>{" "}
      <div className="row g-3 mt-0 mb-4">
        <div className="col">
          <span className="input-group-text fs-5"> NOMBRE </span>{" "}
        </div>{" "}
        <div className="col">
          <input
            type="text"
            className="form-control"
            id="nombre"
            value={name}
            onChange={hadleName}
          />{" "}
        </div>{" "}
      </div>{" "}
      <div className="row g-4 my-4">
        <div className="col">
          <span className="input-group-text fs-5"> APELLIDOS </span>{" "}
        </div>{" "}
        <div className="col">
          <input
            type="text"
            className="form-control"
            id="apellidos"
            value={lastname}
            onChange={hadleLastname}
          />{" "}
        </div>{" "}
      </div>{" "}
      <div className="row g-4 my-4">
        <div className="col">
          <span className="input-group-text fs-5"> CORREO ELECTRÓNICO </span>{" "}
        </div>{" "}
        <div className="col">
          <input
            type="text"
            className="form-control"
            id="correo"
            value={email}
            onChange={hadleEmail}
          />{" "}
        </div>{" "}
      </div>{" "}
      <div className="row g-4 my-4">
        <div className="col">
          <span className="input-group-text fs-5"> CONTRASEÑA </span>{" "}
        </div>{" "}
        <div className="col">
          <input
            type="text"
            className="form-control"
            id="contraseña"
            value={password}
            onChange={hadlePassword}
          />{" "}
        </div>{" "}
      </div>{" "}
      <div className="d-grid gap-2 col-1 mx-auto my-3">
        <button
          className="btn btn-success"
          type="button"
          onClick={handleAltaUsuario}
        >
          <strong> Guardar </strong>
        </button>{" "}
      </div>{" "}
    </div>
  );
};
