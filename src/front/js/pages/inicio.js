import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/home.css";

export const Inicio = () => {
  const navigate = useNavigate();

  const hadleRegistro = () => {
    navigate("/alta_usuario");
  };

  return (
    <div className="main vh-100">
      <div
        className="jumbotron"
        style={{
          backgroundImage: `url("https://www.bbva.com/wp-content/uploads/2015/08/tennis-raqueta.imagen-e1439887030593.jpg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
          height: "500px",
        }}
      >
        <h1 className="display-4 text-light text-center mb-3 p-5">
          Entrena con nosotros y lleva tus límites más allá, saca tu mejor
          versión.
        </h1>
      </div>
      <div className="d-flex flex-column align-items-center mt-3 p-3">
        <button
          className="btn btn-success btn-lg w-25"
          href="#"
          role="button"
          onClick={hadleRegistro}
        >
          Regístrate
        </button>
        <br />
        <Link className="h4 text-dark p-4" to="/acceso">
          Accede directamente con tu correo de usuario.
        </Link>
      </div>
    </div>
  );
};
