import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Bulb from "./components/Bulb/Bulb";
import LightBulb from "./components/Light-Bulb/LightBulb";
import BrokenBulb from "./components/Broken-Bulb/BrokenBulb";
// import Button from "@material-ui/core/Button";

class App extends Component {
  constructor() {
    super();
    this.state = {
      bulb: true,
      light_bulb: false,
      broken_bulb: false
    };
  }
  render() {
    return (
      <div>
        <Navbar title="React Bulb" />
        <Bulb />
        <LightBulb />
        <BrokenBulb />
      </div>
    );
  }
}
// hi
export default App;

// Develop 4 components.
// 1) Should show a Bulb Image(default: bulb) depending on the main component's state.
// 2) Should show a`Switch On` button, on pressing it, the first component should show lightBulb image.
// 3) Should show a`Switch Off` button, on pressing it, the first component should show bulb image.
// 4) Should show a`Break The Bulb` button, on pressing it, the first component should show brokenBulb image.
