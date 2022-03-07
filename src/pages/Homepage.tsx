import { Button } from "@mui/material";
import React from "react";
import classes from "./Homepage.module.scss";

const Homepage = () => {
  return (
    <div className={classes.container}>
      <div className={classes.bigText}>
        <h2>Hike.</h2>
        <h2>Climb.</h2>
        <h2>Go up!</h2>
      </div>
      <p className={classes.description}>
        If you want to track your mountain hiking goals <br />
        or your climbing progress - you've come to the right place.
      </p>
      <Button variant="outlined" color="secondary">
        Create account
      </Button>
    </div>
  );
};

export default Homepage;
