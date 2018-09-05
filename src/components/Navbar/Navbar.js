import React, { Fragment } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import "../../App.css";

// NAVBAR FUNCTIONAL COMPONENT
const Navbar = props => {
  return (
    <Fragment>
      <AppBar position="static" className="nav">
        <Toolbar className="nav_title">
          <Typography variant="title" color="inherit">
            {props.title}
          </Typography>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default Navbar;
