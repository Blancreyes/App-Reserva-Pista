import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Acceso = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const [userName, setUserName] = useState("");
  const { store, actions } = useContext(Context);
  var userName = email;
  const navigate = useNavigate();

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }
  async function handleLogin() {
    // Esta funcion es para  agregar la lógica de iniciar sesión en la base de datos con el email y la contraseña en caso que sea correcta te lleva a la pagina /demo
    let loggedIni = await actions.loginUsuario(email, password);
    if (loggedIni) {
      setEmail("");
      setPassword("");
      navigate("/demo");
    }
  }

  function handleAlta() {
    //Aquí habría que añadir la  lógica para registrar un nuevo usuario en la base de datos con el email y la contraseña
  }
  return (
    <div className="m-auto vh-100">
      <div className=" m-auto text-center mb-4 mt-4">
        <h1>
          <strong>ACCESO</strong>
        </h1>{" "}
      </div>{" "}
      <div className=" m-auto text-center mt-4">
        {" "}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />{" "}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />{" "}
        <button className="btn btn-warning m-1" onClick={handleLogin}>
          <strong> Enviar </strong>{" "}
        </button>{" "}
      </div>{" "}
      <div className="m-auto text-center">
        {" "}
        ¿ Olvidó su contraseña ? Haga click{" "}
        <a className="" href="/password">
          <strong> aquí </strong>{" "}
        </a>{" "}
      </div>{" "}
    </div>
  );
};
