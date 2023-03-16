import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Demo = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <div className="title">
        <h1 className="title">ZONA PRIVADA </h1>
      </div>
      <div className="instalaciones">
        <h2 className="subtitle ms-2">Reservar Instalaciones</h2>
        <ul className="list-group">
          {store.demo.map((item, index) => {
            return (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between"
                style={{ background: item.background }}
              >
                <Link
                  to={"/single/" + index}
                  style={{ textDecoration: "none" }}
                >
                  <span>
                    <strong>{item.title}</strong>
                  </span>
                </Link>
                {
                  // Conditional render example
                  // Check to see if the background is orange, if so, display the message
                  item.background === "orange" ? (
                    <p style={{ color: item.initial }}>
                      Me encanta la tonteria esta de cambiar el color.
                    </p>
                  ) : null
                }
                <button
                  className="btn btn-success"
                  onClick={() => actions.changeColor(index, "orange")}
                >
                  Change Color
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="misreservas d-flex">
        <h2 className="subtitle ms-2">Mis Reservas</h2>
      </div>
      <div className="misreservas d-flex">
        <h2 className="subtitle ms-2">Mis Perfil</h2>
      </div>
      <div className="m-3 text-end">
        <Link className="text-end" to="/">
          <button
            className="btn btn-warning text-end"
            onClick={actions.handlelogout}
          >
            <strong>Cerrar sesion</strong>
          </button>
        </Link>
      </div>
    </div>
  );
};
