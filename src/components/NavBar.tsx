import { Button } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavBar.module.scss";
import logo from "../assets/mountain.svg";

const NavBar = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logoContainer}>
        <img className={classes.logo} src={logo} />
        <h1>Go up!</h1>
      </div>
      <nav>
        <ul className={classes.navigation}>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${classes.active}` : `${classes.inactive}`
              }
              to="/"
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${classes.active}` : `${classes.inactive}`
              }
              to="/mountains"
            >
              Mountains
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${classes.active}` : `${classes.inactive}`
              }
              to="/rocks"
            >
              Rocks
            </NavLink>
          </li>
        </ul>
      </nav>
      <Button variant="contained" color="primary">
        Log in
      </Button>
    </header>
  );
};

export default NavBar;
