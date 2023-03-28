import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import fondo from "../store/resources/teniscourt2.jpg";

export const Inicio = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="main vh-100">
      <div className="call text-center mt-3">
        <p
          style={{
            textDecoration: "none",
            color: "#04740ddc",
            fontSize: "26px",
          }}
        >
          <strong>
            Entrena con nosotros y lleva tus límites más allá, saca tu mejor
            versión.
          </strong>
        </p>
      </div>
      <div
        className="centralcontent text-center mt-3 w-50 "
        style={{ backgroundImage: `url(${fondo})` }}
      ></div>
      <div className="step text-center mt-2">
        <p>
          <strong>
            Regístrate o accede directamente con tu correo de usuario.
          </strong>
        </p>
      </div>
    </div>
  );
};
