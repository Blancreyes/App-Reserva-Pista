import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Demo = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <h1 className="title">ZONA PRIVADA </h1>
      <h2 className="subtitle ms-2">Instalaciones</h2>
      <ul className="list-group">
        {store.demo.map((item, index) => {
          return (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between"
              style={{ background: item.background }}
            >
              <Link to={"/single/" + index}>
                <span>Link to: {item.title}</span>
              </Link>
              {
                // Conditional render example
                // Check to see if the background is orange, if so, display the message
                item.background === "orange" ? (
                  <p style={{ color: item.initial }}>
                    Check store/flux.js scroll to the actions to see the code
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
