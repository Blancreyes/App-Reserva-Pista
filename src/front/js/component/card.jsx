import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";

const Card = (props) => {
  return (
    <div>
      <div id="instalacion">{props.instalacion}</div>
      <div id="hora">{props.startTime}</div>
      <div id="boton_anular"></div>
    </div>
  );
};
export default Card;
