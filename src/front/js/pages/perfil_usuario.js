import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Perfil } from "../component/perfil.jsx";

export const Perfil_Usuario = () => {
  const { store, actions } = useContext(Context);
  const [user, setUser] = useState({});
  const params = useParams();

  useEffect(() => {
    async function user_Info() {
      setUser(await actions.get_usario_data());
    }

    user_Info();
  }, []);

  console.log(user);

  return (
    <div className="jumbotron m-auto mt-3">
      <div className="container">
        <form>
          <div className="row mb-3">
            <label for="inputname" className="col-sm-2 col-form-label">
              Nombre
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="inputname"
                value={user.name}
              />
            </div>
          </div>
          <div className="row mb-3">
            <label for="inputLastName" className="col-sm-2 col-form-label">
              Apellidos
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="inputLastName"
                value={user.lastname}
              />
            </div>
          </div>
          <div className="row mb-3">
            <label for="inputEmail3" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              <input
                type="email"
                className="form-control"
                id="inputEmail3"
                value={user.email}
              />
            </div>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="btn btn-success mb-3 m-auto"
              // onClick={handleUpdateInfo}
            >
              Edit Info
            </button>
          </div>
        </form>
      </div>

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
// Perfil_Usuario.propTypes = {
//   match: PropTypes.object,
// };
