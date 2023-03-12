import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import fondo from "../store/resources/teniscourt2.jpg";

export const Inicio = () => {
  const { store, actions } = useContext(Context);

  return (
    <div
      className="centralcontent text-center mt-5 w-50 "
      style={{ backgroundImage: `url(${fondo})` }}
    >
      {/* <div className="alert alert-info">
        {" "}
        {store.message ||
          "Loading message from the backend (make sure your python backend is running)..."}{" "}
      </div> */}
    </div>
  );
};
