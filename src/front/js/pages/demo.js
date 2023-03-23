import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Demo = () => {
  const { store, actions } = useContext(Context);
  const [loggedIn, setLoggedIn] = useState(false);

  async function checkLogin() {
    // Esta funcion comprueba que se ha iniciado sesión en la base de datos previamente
    // Si la autenticación es correcta, muestra contenido reservado a usuarios de la pagina
    setLoggedIn(await actions.compruebaUsuario());
  }
  // El useEffect no funciona aun bien
  useEffect(() => {
    checkLogin();
  }, []);

  return loggedIn ? (
    <div className="container">
      <div className="title">
        <h1 className="title"> ZONA PRIVADA </h1>{" "}
      </div>{" "}
      <div className="instalaciones ">
        <h2 className="subtitle ms-2"> Reservar Instalaciones </h2>{" "}
        <ul className="list-group w-50">
          {" "}
          {store.demo.map((item, index) => {
            return (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between"
                style={{
                  background: item.background,
                }}
              >
                <Link
                  to={"/single/" + index}
                  style={{
                    textDecoration: "none",
                    color: "#04740ddc",
                  }}
                >
                  <span>
                    <strong> {item.title} </strong>{" "}
                  </span>{" "}
                </Link>{" "}
              </li>
            );
          })}{" "}
        </ul>{" "}
      </div>{" "}
      <div className="misreservas d-flex">
        <h2 className="subtitle ms-2"> Mis Reservas </h2>{" "}
      </div>{" "}
      <div className="misreservas d-flex">
        <Link
          to={"/perfil"}
          style={{
            textDecoration: "none",
            color: "#04740ddc",
          }}
        >
          <h2 className="subtitle ms-2" style={{ cursor: "pointer" }}>
            {" "}
            Mi Perfil{" "}
          </h2>{" "}
        </Link>{" "}
      </div>{" "}
      <div className="m-3 text-end">
        <Link className="text-end" to="/">
          <button
            className="btn btn-warning text-end"
            onClick={() => actions.handleLogout()}
          >
            <strong> Cerrar sesion </strong>{" "}
          </button>{" "}
        </Link>{" "}
      </div>{" "}
    </div>
  ) : (
    <div className="display-5 text-center h-75">
      <strong>
        Para visitar esta zona es necesario acceder como usuario registrado{" "}
      </strong>{" "}
    </div>
  );
};
