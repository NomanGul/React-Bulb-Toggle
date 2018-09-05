import React, { Component, Fragment } from "react";
import swal from "sweetalert";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Bulb from "./components/Bulb/Bulb";
import LightBulb from "./components/Light-Bulb/LightBulb";
import BrokenBulb from "./components/Broken-Bulb/BrokenBulb";
import Toggler from "./components/Toggler/Toggler";
import FloatingButton from "./components/FloatingButton/FloatingButton";

// MAIN APP CLASS
class App extends Component {
  constructor() {
    super();
    this.state = {
      bulb: true,
      light_bulb: false,
      broken_bulb: false,
      isChecked: false,
      floatingButton: true
    };
  }

  // TOGGLE FUNCTION FOR BULB AND LIGHT BULB
  ToggleFunc = name => event => {
    const { bulb, light_bulb } = this.state;
    this.setState({
      bulb: !bulb,
      light_bulb: !light_bulb,
      [name]: event.target.checked
    });
  };

  // FLOATING ACTION BUTTON FUNCTION FOR BROKEN BULB
  FloatingButtonClicked = () => {
    swal({
      title: "Are Kya Tor Dun?",
      text: "Aik bar Tut gya to phir wapis nhi aayga, Tor dun?",
      icon: "warning",
      buttons: ["Nhi oo yar", "Tor De"],
      dangerMode: true
    }).then(willDelete => {
      if (willDelete) {
        this.setState({
          bulb: false,
          light_bulb: false,
          broken_bulb: true,
          isChecked: null,
          floatingButton: false
        });
      } else {
        swal({title: "Bachat ho gai"});
      }
    });
  };

  // MAIN RENDER METHOD
  render() {
    const {
      bulb,
      light_bulb,
      broken_bulb,
      isChecked,
      floatingButton
    } = this.state;
    return (
      <Fragment>
        <Navbar title="React Bulb Toggle" />
        {bulb && <Bulb />}
        {light_bulb && <LightBulb />}
        {broken_bulb && <BrokenBulb />}
        {isChecked !== null && (
          <Toggler
            isChecked={this.state.isChecked}
            ToggleFunc={this.ToggleFunc("isChecked")}
          />
        )}
        {floatingButton && (
          <FloatingButton FloatingButtonClicked={this.FloatingButtonClicked} />
        )}
      </Fragment>
    );
  }
}

export default App;
