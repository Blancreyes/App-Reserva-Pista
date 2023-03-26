import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Perfil = (props) => {
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { store, actions } = useContext(Context);

  const navigate = useNavigate();

  return (
    <div className="container">
      <form>
        <div class="row mb-3">
          <label for="inputname" class="col-sm-2 col-form-label">
            {props.name}
          </label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="inputname" />
          </div>
        </div>
        <div class="row mb-3">
          <label for="inputLastName" class="col-sm-2 col-form-label">
            {props.lastname}
          </label>
          <div class="col-sm-10">
            <input type="password" class="form-control" id="inputLastName" />
          </div>
        </div>
        <div class="row mb-3">
          <label for="inputEmail3" class="col-sm-2 col-form-label">
            {props.email}
          </label>
          <div class="col-sm-10">
            <input type="email" class="form-control" id="inputEmail3" />
          </div>
        </div>
        <div class="row mb-3">
          <label for="inputPassword3" class="col-sm-2 col-form-label">
            Password
          </label>
          <div class="col-sm-10">
            <input type="password" class="form-control" id="inputPassword3" />
          </div>
        </div>
        <button type="submit" class="btn btn-primary">
          Edit Info
        </button>
      </form>
    </div>
  );
};
