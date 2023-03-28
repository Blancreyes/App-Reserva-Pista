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
    async function buscaTitulo() {
      setTitulo(await actions.obtenerInfoPistas(params.theid));
    }
    buscaTitulo();
  }, []);
  console.log(titulo);
  // const instalacion = titulo.data;

  return store.logged ? (
    <div className="jumbotron m-auto vh-150">
      <div className="tituloinstalacion m-auto">
        <h3 className="  text-center mt-1">
          Este es el calendario de la instalacion: {titulo}{" "}
        </h3>{" "}
      </div>{" "}
      <div className="calendarioinstalacion mt-4 text-center">
        <Calendar instalacion={params.theid} />{" "}
      </div>{" "}
      <hr className="my-4" />
      <div className="volver text-end me-5">
        <Link className="text-end" to="/demo">
          <span className="btn btn-warning btn-lg " href="#" role="button">
            <strong> Volver Atrás </strong>{" "}
          </span>{" "}
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

Single.propTypes = {
  match: PropTypes.object,
};
