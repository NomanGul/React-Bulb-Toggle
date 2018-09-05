import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import BrokenImage from "@material-ui/icons/BrokenImage";

// STYLES
const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    backgroundColor: "red"
  },
  extendedIcon: {
    marginRight: theme.spacing.unit
  },
  icon: {
    color: "white"
  }
});

// FLOATING BUTTON FUNCTIONAL COMPONENT FOR BROKEN BULB
const FloatingButton = props => {
  const { classes } = props;
  return (
    <div className="floating_btn">
      <Button
        variant="fab"
        aria-label="Add"
        className={classes.button}
        onClick={props.FloatingButtonClicked}
      >
        <BrokenImage className={classes.icon} />
      </Button>
    </div>
  );
};

export default withStyles(styles)(FloatingButton);
