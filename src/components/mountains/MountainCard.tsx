import { PropaneSharp } from "@mui/icons-material";
import React from "react";
import classes from "./MountainCard.module.scss";
import coverPhoto from "../../assets/mainCover.jpg";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import HikingIcon from "@mui/icons-material/Hiking";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";

interface MountainCardProps {
  title: string;
  date: string;
  routeLength: number;
  duration: number;
}

const MountainCard = (props: MountainCardProps) => {
  return (
    <div className={classes.cardContainer}>
      <img src={coverPhoto} className={classes.coverPhoto} />
      <h1 className={classes.title}>{props.title}</h1>
      <div className={classes.details}>
        <p className={classes.detailsItem}>
          <CalendarTodayIcon className={classes.icon} />
          {props.date}
        </p>
        <p className={classes.detailsItem}>
          <HikingIcon className={classes.icon} />
          {props.routeLength} km
        </p>
        <p className={classes.detailsItem}>
          {" "}
          <QueryBuilderIcon className={classes.icon} />
          {props.duration} h
        </p>
      </div>
    </div>
  );
};

export default MountainCard;
