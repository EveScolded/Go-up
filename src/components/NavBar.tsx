import { Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavBar.module.scss";
import logo from "../assets/mountain.svg";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpenMenu = () => {
    setIsOpen((isMobile) => !isMobile);
  };
  return (
    <header className={classes.header}>
      <div className={classes.logoContainer}>
        <img className={classes.logo} src={logo} />
        <h1>Go up!</h1>
      </div>

      <NavLinks className={classes.menuDesktop} />
      <Button
        className={classes.menu}
        variant="contained"
        color="primary"
        onClick={onOpenMenu}
      >
        <MenuIcon />
      </Button>
      {isOpen && <MobileMenu />}

      <Button variant="contained" color="primary">
        Log in
      </Button>
    </header>
  );
};

export default NavBar;
