import React from "react";
import { NavLink } from "react-router-dom";

export const LinkItem = (props) => {
  return (
    <li className="nav-item">
      <NavLink className={`nav-link`} aria-current="page" to={props.url}>
        {props.linkItem}
      </NavLink>
    </li>
  );
};

export const Pagelist = (props) => {
  return (
    <span className="text-size text-white">
      <span className="text-brown">{props.listItem}: </span>
      {props.content}
      <br />
    </span>
  );
};

export const InputField = (props) => {
  return (
    <div className="styled-input wide">
      <input type={props.type} required />
      <label>{props.placeholder}</label>
    </div>
  );
};
