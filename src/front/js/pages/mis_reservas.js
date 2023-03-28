import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/component.css";
import { useNavigate } from "react-router-dom";
import CardReservas from "../component/cardreservas.jsx";

export const Mis_reservas = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const instalacionescalendario = () => {
    navigate("/demo");
  };
  useEffect(() => {
    async function reservas_usuario() {
      await actions.get_usario_reservas();
    }
    reservas_usuario();
  }, []);

  return (
    <div className="container-lg">
      <div className="fw-bold text-center fs-2 mt-1 mb-0"> MIS RESERVAS </div>{" "}
      <div className="row g-3 mt-0 mb-4  ">
        <div className="col-1"></div>
        <div className="col ">
          <span
            id="color-fuente"
            className="input-group-text fs-4 justify-content-center fw-bold"
          >
            {" "}
            INSTALACIÓN{" "}
          </span>{" "}
        </div>{" "}
        <div className="col ">
          <span
            id="color-fuente"
            className="input-group-text fs-4 justify-content-center fw-bold"
          >
            {" "}
            DIA / HORA{" "}
          </span>{" "}
        </div>{" "}
        <div className="col-1"></div>
      </div>{" "}
      {store.reservas_usuario.map((item) => (
        <CardReservas
          key={item.id}
          id_reservas={item.id}
          instalacion={item.nombre_pista}
          startTime={item.startTime}
        />
      ))}{" "}
      <div className="text-end my-3">
        <button
          className="btn btn-warning "
          type="button"
          onClick={instalacionescalendario}
        >
          <strong>Volver Atrás</strong>
        </button>{" "}
      </div>{" "}
    </div>
  );
};
