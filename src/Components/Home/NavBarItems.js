import React from "react";
import {
  makeStyles,
  Typography,
  Button,
  Menu,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import { Link, animateScroll as scroll } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
  bodyEl: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
  },
  mobileMenus: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "flex-end",
  },
  mobileMenuItems: {
    display: "flex",
    flexDirection: "column",
  },
}));

const NavBarItems = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up("sm"));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Button onClick={scrollToTop}>
        <Typography variant="h5" className={classes.title}>
          PMT
        </Typography>
      </Button>
      <div className={classes.bodyEl}>
        {isMobile ? (
          <>
            <div className={classes.bodyEl}>
              <Button className="nav-item" color="inherit">
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  About-us
                </Link>
              </Button>
              <Button className="nav-item" color="inherit">
                <Link
                  activeClass="active"
                  to="team"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Team
                </Link>
              </Button>
              <Button className="nav-item" color="inherit">
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Contact-us
                </Link>
              </Button>
            </div>
            <Button className={classes.menuButton} color="inherit">
              Login
            </Button>
          </>
        ) : (
          <div className={classes.mobileMenus}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={handleMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={handleClose}
              className={classes.mobileMenuItems}
            >
              <Button color="inherit">
                <Link
                  className={classes.mobileMenuItems}
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  About-us
                </Link>
              </Button>
              <Button color="inherit">
                <Link
                  className={classes.mobileMenuItems}
                  activeClass="active"
                  to="team"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Team
                </Link>
              </Button>
              <Button color="inherit">
                <Link
                  className={classes.mobileMenuItems}
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Contact-us
                </Link>
              </Button>
              <Button color="inherit">Login</Button>
            </Menu>
          </div>
        )}
      </div>
    </>
  );
};

export default NavBarItems;
