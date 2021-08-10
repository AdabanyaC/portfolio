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
