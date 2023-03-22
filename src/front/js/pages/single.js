import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Calendar } from "../component/calendar.jsx";

export const Single = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [titulo, setTitulo] = useState(null);

  useEffect(() => {
    async () => {
      setTitulo(await actions.obtenerInfoPistas(params.theid));
    };
  }, []);

  return (
    <div className="jumbotron m-auto">
      <div className="tituloinstalacion m-auto">
        <h3 className="  text-center mt-1">
          Este es el calendario de la instalacion: {titulo}
        </h3>
      </div>
      <div className="calendarioinstalacion mt-4 text-center">
        <Calendar instalacion={params.theid} />
      </div>
      <hr className="my-4" />

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

Single.propTypes = {
  match: PropTypes.object,
};
