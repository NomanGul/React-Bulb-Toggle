import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import Switch from "@material-ui/core/Switch";

// Toggle Button Styles
const styles = theme => ({
  colorSwitchBase: {
    color: purple[300],
    "&$colorChecked": {
      color: purple[500],
      "& + $colorBar": {
        backgroundColor: purple[500]
      }
    }
  },
  colorBar: {},
  colorChecked: {},
  iOSSwitchBase: {
    "&$iOSChecked": {
      color: theme.palette.common.white,
      "& + $iOSBar": {
        backgroundColor: "#52d869"
      }
    },
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
      easing: theme.transitions.easing.sharp
    })
  },
  iOSChecked: {
    transform: "translateX(15px)",
    "& + $iOSBar": {
      opacity: 1,
      border: "none"
    }
  },
  iOSBar: {
    borderRadius: 13,
    width: 42,
    height: 26,
    marginTop: -13,
    marginLeft: -21,
    border: "solid 1px",
    borderColor: theme.palette.grey[400],
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(["background-color", "border"])
  },
  iOSIcon: {
    width: 24,
    height: 24
  },
  iOSIconChecked: {
    boxShadow: theme.shadows[1]
  }
});

// TOGGLER BUTTON CLASS
class Toggler extends Component {
  render() {
    const { classes, ToggleFunc, isChecked } = this.props;

    return (
      <div className="toggler">
        <Switch
          classes={{
            switchBase: classes.iOSSwitchBase,
            bar: classes.iOSBar,
            icon: classes.iOSIcon,
            iconChecked: classes.iOSIconChecked,
            checked: classes.iOSChecked
          }}
          disableRipple
          checked={isChecked}
          onChange={ToggleFunc}
          value="isChecked"
        />
      </div>
    );
  }
}

export default withStyles(styles)(Toggler);
