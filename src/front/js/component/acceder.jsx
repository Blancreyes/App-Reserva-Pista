import React, { useState } from "react";

export const Acceder = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleSignIn() {
    //Esta funcion es para  agregar la lógica de iniciar sesión en la base de datos con el email y la contraseña
    //Si la autenticación es correcta, hay que poner setLoggedIn a true y a setUserName a el nombre del usuario registrado en la base de datos
  }

  function handleSignUp() {
    //Aquí habría que añadir la  lógica para registrar un nuevo usuario en la base de datos con el email y la contraseña
  }

  function handleLogout() {
    //Aquí habría que colocar la lógica para cerrar la sesión del usuario y  colocar setLoggedIn a false
    setEmail("");
    setPassword("");
    setUserName("");
  }

  return (
    <div className="">
      <div className="text-center">
        <h1>Acceso</h1>
      </div>
      {loggedIn ? (
        <div>
          <p>Welcome, {userName}</p>
          <button onClick={handleLogout}>Log out</button>
        </div>
      ) : (
        <div>
          {" "}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          <button className="btn btn-warning m-1" onClick={handleSignIn}>
            <strong>Acceder</strong>
          </button>
          <button className="btn btn-warning m-1" onClick={handleSignUp}>
            <strong>Registrarse</strong>
          </button>
        </div>
      )}
    </div>
  );
};
