import { PropaneSharp } from "@mui/icons-material";
import classes from "./MobileMenu.module.scss";
import NavLinks from "./NavLinks";

interface MobileMenuProps {
  onOpenMenu: () => void;
}

const MobileMenu = (props: MobileMenuProps) => {
  return (
    <div className={classes.menuContainer} onClick={props.onOpenMenu}>
      <NavLinks className={classes.menuMobile} />
    </div>
  );
};

export default MobileMenu;
