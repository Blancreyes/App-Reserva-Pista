import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/component.css";
import { useNavigate } from "react-router-dom";
import Card from "../component/card.jsx";

export const Mis_reservas = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const instalacionescalendario = () => {
    navigate("/demo");
  };
  useEffect(() => {
    async function reservas_usuario() {
      //setReservas(await actions.reservas_usuario());
      await actions.get_usario_reservas();
    }

    reservas_usuario();
  }, []);
  //console.log(setReservas);

  const misReservas = store.reservas_usuario;
  console.log("estas son mis reservas", misReservas);
  // let nombreru = misReservas.map((np) => np.nombre_pista);
  // console.log(nombreru);
  return (
    // {misReservas.map((item,index) => {

    // })}
    <div className="container-lg">
      {store.reservas_usuario.map((item) => (
        <Card
          key={item.id}
          id_reservas={item.id}
          instalacion={item.nombre_pista}
          startTime={item.startTime}
        />
      ))}{" "}
    </div>
  );
};
