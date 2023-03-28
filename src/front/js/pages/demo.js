import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import logoprivada from "../store/resources/logoprivada.png";

import { Context } from "../store/appContext";

export const Demo = () => {
  const { store, actions } = useContext(Context);
  const [loggedIn, setLoggedIn] = useState(false);

  async function checkLogin() {
    // Esta funcion comprueba que se ha iniciado sesión en la base de datos previamente
    // Si la autenticación es correcta, muestra contenido reservado a usuarios de la pagina
    setLoggedIn(await actions.compruebaUsuario());
  }

  useEffect(() => {
    checkLogin();
  }, []);

  return loggedIn ? (
    <div className="container border border-success mt-3 rounded-4 vh-100">
      <div className="title">
        <h1 className="title"> ZONA PRIVADA </h1>{" "}
      </div>
      <div className="display d-flex w-100">
        <div className="instalaciones mt-5 ms-5 w-100">
          <h2 className="subtitle ms-2"> Reservar Instalaciones </h2>{" "}
          <ul className="list-group w-75">
            {" "}
            {store.pistas.map((item, index) => {
              return (
                <li
                  key={index}
                  className="list-group-item d-flex justify-content-between"
                >
                  <Link
                    to={"/single/" + item.id}
                    style={{
                      textDecoration: "none",
                      color: "#04740ddc",
                    }}
                  >
                    <span>
                      <strong> {item.nombre} </strong>{" "}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="misreservas mt-2 d-flex">
            <Link
              to={"/perfil_usuario"}
              style={{
                textDecoration: "none",
                color: "#04740ddc",
              }}
            >
              <h2 className="subtitle ms-2"> Mi Perfil </h2>
            </Link>
          </div>
          <div className="misreservas mt-2 d-flex">
            <Link
              to={"/mis_reservas"}
              style={{
                textDecoration: "none",
                color: "#04740ddc",
              }}
            >
              <h2 className="subtitle ms-2"> Mis Reservas </h2>
            </Link>
          </div>{" "}
        </div>
        <div className="imgdisplay me-5">
          <img src={logoprivada} />
        </div>
      </div>
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
