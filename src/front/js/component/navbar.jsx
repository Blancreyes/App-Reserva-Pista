import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/component.css";
import logo from "../store/resources/logooval.png";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <nav className="barra d-flex w-100">
      <div className="logocont m-2 w-75 flex-grow-1 ">
        <Link to="/">
          <img className=" logo " src={logo} />
        </Link>
      </div>
      {store.logged ? (
        <div className="welcome mt-4 w-75">
          <h3 className="text-warning">Bienvenido a Resérvame</h3>
        </div>
      ) : (
        <div className="botones mt-3 ml-5 w-75 text-end">
          <Link to="/acceso" className="btn btn-warning m-1">
            <strong>Acceder</strong>
          </Link>
          <Link to="/alta_usuario" className="btn btn-warning m-1">
            <strong>Registrarse</strong>
          </Link>
        </div>
      )}

      <div className="flags w-25 mt-3 me-3 text-end ">
        <Link className="flag1 me-1 align-items-end " to={"./"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 60 30"
            width="50"
            height="50"
          >
            <clipPath id="s">
              <path d="M0,0 v30 h60 v-30 z" />
            </clipPath>
            <clipPath id="t">
              <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
            </clipPath>
            <g clipPath="url(#s)">
              <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
              <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
              <path
                d="M0,0 L60,30 M60,0 L0,30"
                clipPath="url(#t)"
                stroke="#C8102E"
                strokeWidth="4"
              />
              <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
              <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
            </g>
          </svg>
        </Link>
        <Link className="flag2 align-items-end" to={"./"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 60 30"
            width="50"
            height="50"
          >
            <clipPath id="s">
              <path d="M0,0 v30 h60 v-30 z" />
            </clipPath>
            <clipPath id="t">
              <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
            </clipPath>
            <g clipPath="url(#s)">
              <path d="M0,0 v30 h60 v-30 z" fill="#C8102E" />
              {/* <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" /> */}
              {/* <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4"/> */}
              <path d="M0,0 v0 M0,15 h60" stroke="#f1dc18" strokeWidth="10" />
              {/* <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/> */}
            </g>
          </svg>
        </Link>
      </div>
    </nav>
  );
};
