import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import BrokenImage from "@material-ui/icons/BrokenImage";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  extendedIcon: {
    marginRight: theme.spacing.unit
  }
});

function FloatingButton(props) {
  const { classes } = props;
  return <div className="floating_btn">
    <Button variant="fab" color="primary" aria-label="Add" className={classes.button} onClick={props.FloatingButtonClicked}>
        <BrokenImage />
      </Button>
    </div>;
}

export default withStyles(styles)(FloatingButton);
