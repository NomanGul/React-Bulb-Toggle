import React, { Component } from "react";
import swal from "sweetalert";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Bulb from "./components/Bulb/Bulb";
import LightBulb from "./components/Light-Bulb/LightBulb";
import BrokenBulb from "./components/Broken-Bulb/BrokenBulb";
import Toggler from "./components/Toggler/Toggler";
import FloatingButton from "./components/FloatingButton/FloatingButton";

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

  handleChange = name => event => {
    const { bulb, light_bulb } = this.state;
    this.setState({
      bulb: !bulb,
      light_bulb: !light_bulb,
      [name]: event.target.checked
    });
  };

  FloatingButtonClicked = () => {
    // const { bulb, light_bulb, broken_bulb } = this.state;
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
        swal("Bachat ho gai");
      }
    });
  };

  render() {
    const { bulb, light_bulb, broken_bulb, isChecked, floatingButton } = this.state;
    return (
      <div>
        <Navbar title="React Bulb Toggle" />
        {bulb && <Bulb />}
        {light_bulb && <LightBulb />}
        {broken_bulb && <BrokenBulb />}
        {isChecked !== null && (
          <Toggler
            isChecked={this.state.isChecked}
            handleChange={this.handleChange("isChecked")}
          />
        )}
        {floatingButton && <FloatingButton FloatingButtonClicked={this.FloatingButtonClicked} />}
      </div>
    );
  }
}

export default App;

// Develop 4 components.
// 1) Should show a Bulb Image(default: bulb) depending on the main component's state.
// 2) Should show a`Switch On` button, on pressing it, the first component should show lightBulb image.
// 3) Should show a`Switch Off` button, on pressing it, the first component should show bulb image.
// 4) Should show a`Break The Bulb` button, on pressing it, the first component should show brokenBulb image.
