import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Acceso = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
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
    // Esta funcion es para  agregar la lógica de iniciar sesión en la base de datos con el email y la contraseña
    // Si la autenticación es correcta, hay que poner setLoggedIn a true y a setUserName a el nombre del usuario registrado en la base de datos´
    // setLoggedIn(await actions.loginUsuario(email, password));
    let loggedIni = await actions.loginUsuario(email, password);
    if (loggedIni) {
      navigate("/demo");
    }
  }

  function handleAlta() {
    //Aquí habría que añadir la  lógica para registrar un nuevo usuario en la base de datos con el email y la contraseña
  }

  function handleLogout() {
    //Aquí habría que colocar la lógica para cerrar la sesión del usuario y  colocar setLoggedIn a false
    setEmail("");
    setPassword("");
    setLoggedIn(false);
  }

  return (
    <div className="m-auto">
      <div className=" m-auto text-center">
        <h1> Acceso </h1>{" "}
      </div>{" "}
      <div className=" m-auto text-center">
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
      </div>
    </div>
  );
};
