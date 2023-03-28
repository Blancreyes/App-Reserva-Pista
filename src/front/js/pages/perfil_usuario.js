import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Perfil } from "../component/perfil.jsx";

export const Perfil_Usuario = () => {
  const { store, actions } = useContext(Context);
  const [data, setData] = useState({});
  const [user, setUser] = useState({});
  const params = useParams();

  const submitNewInfo = (e) => {
    e.preventDefault();
    actions.update_usario_data(user);
  };

  useEffect(() => {
    async function user_Info() {
      setUser(await actions.get_usario_data());
    }

    user_Info();
  }, []);

  return (
    <div className="jumbotron m-auto mt-3">
      <div className="container text-center mb-2 ">
        <h2 className="titlepage">EDITAR DATOS DEL PERFIL</h2>
        <form onSubmit={submitNewInfo}>
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label">Nombre</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="name"
                defaultValue={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
              />
            </div>
          </div>
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label">Apellido</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="lastName"
                defaultValue={user.lastname}
                onChange={(e) => setUser({ ...user, lastname: e.target.value })}
              />
            </div>
          </div>
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
              <input
                type="email"
                className="form-control"
                id="email3"
                defaultValue={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </div>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-success mb-3 m-auto">
              Guardar cambios
            </button>
          </div>
        </form>
      </div>
      <div className="volver text-end me-5">
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
    </div>
  );
};

// Perfil_Usuario.propTypes = {
//   match: PropTypes.object,
// };
