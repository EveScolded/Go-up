import classes from "./MobileMenu.module.scss";
import NavLinks from "./NavLinks";

const MobileMenu = () => {
  return (
    <div className={classes.menuContainer}>
      <NavLinks className={classes.menuMobile} />
    </div>
  );
};

export default MobileMenu;
