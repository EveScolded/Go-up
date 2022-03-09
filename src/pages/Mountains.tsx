import React from "react";
import MountainCard from "../components/mountains/MountainCard";
import classes from "./Mountains.module.scss";

const Mountains = () => {
  return (
    <div className={classes.container}>
      <div className={classes.cardsContainer}>
        <MountainCard />
        <MountainCard />
      </div>
    </div>
  );
};

export default Mountains;
