import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Perfil = (props) => {
  const { store, actions } = useContext(Context);
  const [user, setUser] = useState();
  const params = useParams();

  async function user_Info() {
    // Esta funcion comprueba que se ha iniciado sesión en la base de datos previamente
    // Si la autenticación es correcta, muestra contenido reservado a usuarios de la pagina
    setUser(await actions.profile_info());
    return user;
  }

  useEffect(() => {
    user_Info();
  }, []);

  return (
    <div className="jumbotron m-auto">
      <div className="calendarioinstalacion mt-4 text-center">
        <p>{user}</p>
      </div>

      <Link className="text-end" to="/demo">
        <span
          className="btn btn-warning btn-lg text-end"
          href="#"
          role="button"
        >
          <strong>Volver Atrás</strong>
        </span>
      </Link>
    </div>
  );
};
Perfil.propTypes = {
  match: PropTypes.object,
};
