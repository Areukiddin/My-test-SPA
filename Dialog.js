import React from "react";
import { NavLink } from "react-router-dom";
import dialogStyles from "../dialogs.module.css";

export const Dialog = (props) => {
  return (
    <NavLink className={dialogStyles.navLink} to={"/dialogs/" + props.id}>
      <div className={dialogStyles.dialog}>
        <img
          className={dialogStyles.userAvatar}
          src={props.avatar}
          width="50px"
          height="50px"
        ></img>
        <div className={dialogStyles.names}>{props.name}</div>
      </div>
    </NavLink>
  );
};
