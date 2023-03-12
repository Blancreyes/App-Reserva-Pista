import React from "react";
import { Link } from "react-router-dom";
import "../../styles/component.css";
import logo from "../store/resources/logooval.png";
import { Acceder } from "./acceder.jsx";

export const Alta = () => {
  return (
    <nav className="barra d-flex w-100">
      <div className="logocont m-2 w-75 flex-grow-1 ">
        <Link to="/">
          <img className=" logo " src={logo} />
        </Link>
      </div>

      <div className="registro ml-5 w-75 text-end">
        {/* <div className="myinputs m-2">
          <div className="input1 m-1">
            <label htmlFor="" className="Email">
              <span>
                <strong>Email: </strong>
              </span>
            </label>
            <input type="email" className="text m-1" />
          </div>

          <div className="input2 m-1">
            <label htmlFor="" className="password">
              <span>
                <strong>Contraseña: </strong>
              </span>
            </label>
            <input type="password" className="text m-1" />
          </div>
        </div>
        <Link className="enlace me-2" to="/demo">
          <button className="me-1 btn btn-warning">
            <span>
              <strong>Acceso</strong>
            </span>
          </button>
        </Link>
        <Link className="enlace me-3" to="/demo">
          <button className="me-1 btn btn-warning">
            <span>
              <strong>Registro</strong>
            </span>
          </button>
        </Link> */}
      </div>

      <div className="flags w-25 mt-1 me-3 text-end ">
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
            <g clip-path="url(#s)">
              <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
              <path
                d="M0,0 L60,30 M60,0 L0,30"
                stroke="#fff"
                stroke-width="6"
              />
              <path
                d="M0,0 L60,30 M60,0 L0,30"
                clip-path="url(#t)"
                stroke="#C8102E"
                stroke-width="4"
              />
              <path d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10" />
              <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" stroke-width="6" />
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
            <g clip-path="url(#s)">
              <path d="M0,0 v30 h60 v-30 z" fill="#C8102E" />
              {/* <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" /> */}
              {/* <path d="M0,0 L60,30 M60,0 L0,30" clip-path="url(#t)" stroke="#C8102E" stroke-width="4"/> */}
              <path d="M0,0 v0 M0,15 h60" stroke="#f1dc18" stroke-width="10" />
              {/* <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" stroke-width="6"/> */}
            </g>
          </svg>
        </Link>
      </div>
    </nav>
  );
};
