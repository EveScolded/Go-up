import { PropaneSharp } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import classes from "./NavLinks.module.scss";

interface NavLinksProps {
  className?: string;
}

const NavLinks = (props: NavLinksProps) => {
  return (
    <nav>
      <ul className={props.className}>
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
  );
};

export default NavLinks;
