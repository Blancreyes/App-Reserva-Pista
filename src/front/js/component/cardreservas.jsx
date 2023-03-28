import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";

const CardReservas = (props) => {
  const { store, actions } = useContext(Context);
  const [disableInstalacion, setDisableInstalacion] = useState(false);

  async function eliminarreservaInstalacion() {
    let borrar = await actions?.delete_usuario_reservas(props.id_reservas);
    console.log(props.id_reservas);
    if (borrar) {
      setDisableInstalacion(true);
      alert("Tu reserva ha sido anulada.");
    }
  }

  return (
    <div className="container-lg">
      <div className="row g-3 mt-0 mb-4  ">
        <div className="col-1"></div>
        <div className="col ">
          <span className="input-group-text fs-4 justify-content-center fw-bold">
            {props.instalacion}
          </span>
        </div>
        <div className="col ">
          <span className="input-group-text fs-4 justify-content-center fw-bold">
            {props.startTime}
          </span>
        </div>
        <div className="d-grid gap-1 d-md-block text-center col-1">
          <button
            id="Piscina"
            className={
              disableInstalacion
                ? "btn-secondary align-middle align-bottom"
                : "btn btn-outline-danger fw-bold align-bottom"
            }
            disabled={disableInstalacion}
            onClick={eliminarreservaInstalacion}
          >
            {disableInstalacion ? "ANULADO" : "ANULAR"}
          </button>
        </div>
      </div>
    </div>
  );
};
export default CardReservas;
