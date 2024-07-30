import React, { Component } from "react";
import "./Splash.css";
import { Redirect } from "react-router-dom";

class Splash extends Component {

  render() {
    return(
      <div>
      <Redirect to="/home" />

      </div>
    )
   
  
}
}

export default Splash;
