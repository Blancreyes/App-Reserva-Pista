import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import fondo from "../store/resources/teniscourt2.jpg";
import { Link } from "react-router-dom";

export const Inicio = () => {
  const { store, actions } = useContext(Context);

  return (
    // <div classNameName="main">
    //   <div classNameName="call text-center mt-3">
    //     <p
    //       style={{
    //         textDecoration: "none",
    //         color: "#04740ddc",
    //         fontSize: "26px",
    //       }}
    //     >
    //       <strong>
    //         Entrena con nosotros y lleva tus límites más allá, saca tu mejor
    //         versión.
    //       </strong>
    //     </p>
    //   </div>
    //   <div
    //     classNameName="centralcontent text-center mt-3 w-50 "
    //     style={{ backgroundImage: `url(${fondo})` }}
    //   ></div>
    //   <div classNameName="step text-center mt-2">
    //     <p>
    //       <strong>
    //         Regístrate o accede directamente con tu correo de usuario.
    //       </strong>
    //     </p>
    //   </div>
    // </div>
    <div className="vh-100">
      <div
        className="jumbotron"
        style={{
          backgroundImage: `url("https://www.bbva.com/wp-content/uploads/2015/08/tennis-raqueta.imagen-e1439887030593.jpg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
          height: "500px",
        }}
      >
        {/* <img
        src="https://www.bbva.com/wp-content/uploads/2015/08/tennis-raqueta.imagen-e1439887030593.jpg"
        alt=""
      /> */}
        <h1 className="display-4 text-light text-center mb-3">
          Entrena con nosotros y lleva tus límites más allá, saca tu mejor
          versión.
        </h1>
        {/* <div className="d-flex flex-column align-items-center mt-3">
          <button
            className="btn btn-success btn-lg w-25"
            href="#"
            role="button"
          >
            Regístrate
          </button>
          <br />
          <Link className="h4 text-light" to="/acceso">
            accede directamente con tu correo de usuario.
          </Link>
        </div> */}
      </div>
      <div className="d-flex flex-column align-items-center mt-3">
        <button className="btn btn-success btn-lg w-25" href="#" role="button">
          Regístrate
        </button>
        <br />
        <Link className="h4 text-dark" to="/acceso">
          accede directamente con tu correo de usuario.
        </Link>
      </div>
    </div>
  );
};
