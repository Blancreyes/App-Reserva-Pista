import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/component.css";
import { useNavigate } from "react-router-dom";

export const Mis_reservas = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const [piscinaDiaHora, setPiscinaDiaHora] = useState("");
  const [paddleDiaHora, setPaddleDiaHora] = useState("");
  const [tenisDiaHora, setTenisDiaHora] = useState("");
  const [futbolDiaHora, setFutbolDiaHora] = useState("");
  const [disablePiscina, setDisablePiscina] = useState(false);
  const [disablePaddle, setDisablePaddle] = useState(false);
  const [disableTenis, setDisableTenis] = useState(false);
  const [disableFutbol, setDisableFutbol] = useState(false);
  const [reservas, setReservas] = useState({});

  const eliminarreservapiscina = () => {
    setDisablePiscina(true);
    alert("Tu reserva para la piscina ha sido eliminada.");
    setPiscinaDiaHora("");
  };
  const eliminarreservapaddle = () => {
    setDisablePaddle(true);
    alert("Tu reserva para la pista de paddle ha sido eliminada.");
    setPaddleDiaHora("");
  };
  const eliminarreservatenis = () => {
    setDisableTenis(true);
    alert("Tu reserva para la pista de tenis ha sido eliminada.");
    setTenisDiaHora("");
  };
  const eliminarreservafutbol = () => {
    setDisableFutbol(true);
    alert("Tu reserva para el campo de futbol ha sido eliminada.");
    setFutbolDiaHora("");
  };
  const instalacionescalendario = () => {
    navigate("/demo");
  };
  useEffect(() => {
    async function reservas_usuario() {
      setReservas(await actions.reservas_usuario());
    }

    reservas_usuario();
  }, []);
  console.log(setReservas);

  // async function handleRecuperarPassword(e) {
  //   let recover = await actions.recover_password(email);
  //   if (recover) {
  //     setEmail("");
  //     alert(
  //       "Se ha enviado un correo electrónico con las instrucciones para modificar la contraseña"
  //     );
  //     navigate("/acceso");
  //   }
  // }

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
      <div className="row g-4 my-4">
        <div className="col-1"></div>
        <div className="col ">
          <span
            id="color-fuente"
            className="input-group-text fs-4 justify-content-center fw-normal"
          >
            {" "}
            PISCINA{" "}
          </span>{" "}
        </div>{" "}
        <div className="col">
          <input
            type="text"
            className="form-control"
            id="apellidos"
            value={piscinaDiaHora}
          />{" "}
        </div>{" "}
        <div class="d-grid gap-1 d-md-block text-center col-1">
          <button
            id="Piscina"
            className={
              disablePiscina
                ? "btn-secondary"
                : "btn btn-outline-danger fw-bold"
            }
            disabled={disablePiscina}
            onClick={eliminarreservapiscina}
          >
            {disablePiscina ? "ANULADO" : "ANULAR"}
          </button>
        </div>
      </div>{" "}
      <div className="row g-4 my-4">
        <div className="col-1"></div>
        <div className="col ">
          <span
            id="color-fuente"
            className="input-group-text fs-4 justify-content-center fw-normal"
          >
            {" "}
            PISTA PADDLE{" "}
          </span>{" "}
        </div>{" "}
        <div className="col">
          <input
            type="text"
            className="form-control"
            id="apellidos"
            value={paddleDiaHora}
          />{" "}
        </div>{" "}
        <div class="d-grid gap-1 d-md-block text-center col-1">
          <button
            id="Paddle"
            className={
              disablePaddle ? "btn-secondary" : "btn btn-outline-danger fw-bold"
            }
            disabled={disablePaddle}
            onClick={eliminarreservapaddle}
          >
            {disablePaddle ? "ANULADO" : "ANULAR"}
          </button>
        </div>
      </div>{" "}
      <div className="row g-4 my-4">
        <div className="col-1"></div>
        <div className="col ">
          <span
            id="color-fuente"
            className="input-group-text fs-4 justify-content-center fw-normal"
          >
            {" "}
            PISTA TENIS{" "}
          </span>{" "}
        </div>{" "}
        <div className="col">
          <input
            type="text"
            className="form-control"
            id="apellidos"
            value={tenisDiaHora}
          />{" "}
        </div>{" "}
        <div class="d-grid gap-1 d-md-block text-center col-1">
          <button
            className={
              disableTenis ? "btn-secondary" : "btn btn-outline-danger fw-bold"
            }
            disabled={disableTenis}
            onClick={eliminarreservatenis}
          >
            {disableTenis ? "ANULADO" : "ANULAR"}
          </button>
        </div>
      </div>{" "}
      <div className="row g-4 my-4">
        <div className="col-1"></div>
        <div className="col ">
          <span
            id="color-fuente"
            className="input-group-text fs-4 justify-content-center fw-normal"
          >
            {" "}
            CAMPO FULBOL{" "}
          </span>{" "}
        </div>{" "}
        <div className="col">
          <input
            type="text"
            className="form-control"
            id="apellidos"
            value={futbolDiaHora}
          />{" "}
        </div>{" "}
        <div class="d-grid gap-1 d-md-block text-center col-1">
          <button
            className={
              disableFutbol ? "btn-secondary" : "btn btn-outline-danger fw-bold"
            }
            disabled={disableFutbol}
            onClick={eliminarreservafutbol}
          >
            {disableFutbol ? "ANULADO" : "ANULAR"}
          </button>
        </div>
      </div>{" "}
      <div className="d-grid gap-2 col-5 mx-auto my-3">
        <button
          id="boton-guardar"
          className="btn btn-success  fw-bold"
          type="button"
          onClick={instalacionescalendario}
        >
          INSTALACIONES / CALENDARIOS{" "}
        </button>{" "}
      </div>{" "}
    </div>
  );
};
