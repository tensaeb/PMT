import React from "react";
import {
  makeStyles,
  Typography,
  Button,
  Menu,
  IconButton,
  useTheme,
  useMediaQuery,
  List,
  ListItem,
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import { Link, animateScroll as scroll } from "react-scroll";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: theme.palette.primary,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
    color: theme.palette.secondary.main,
  },
  bodyEl: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
    color: theme.palette.secondary.main,
  },
  mobileMenus: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "flex-end",
    // scale: "4",
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
  let history = useHistory();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const handleClick = () => {
    history.push("/login");
  };

  return (
    <>
      <Button onClick={scrollToTop}>
        <Typography variant="h4" className={classes.title}>
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
              {/* <Button className="nav-item" color="inherit">
                <Link
                  activeClass="active"
                  to="team"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Team
                </Link>
              </Button> */}
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
            <Button
              className={classes.menuButton}
              color="inherit"
              onClick={handleClick}
            >
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
              open={open}
              onClose={handleClose}
              className={classes.mobileMenuItems}
            >
              <List>
                <ListItem button>
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
                </ListItem>
                <ListItem>
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
                </ListItem>
                <ListItem>
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
                </ListItem>
                <ListItem>
                  <Link color="inherit" onClick={handleClick}>
                    Login
                  </Link>
                </ListItem>
              </List>
            </Menu>
          </div>
        )}
      </div>
    </>
  );
};

export default NavBarItems;
