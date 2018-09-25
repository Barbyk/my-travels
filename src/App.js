import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My Travels</h1>
        </header>
        <Travel
          destination="SEOUL!"
          country="Corée du Sud"
          distance="9 378 km"
          photo="http://image.noelshack.com/fichiers/2018/39/2/1537868418-seoul.jpeg"
        />
        <Travel
          destination="MONT-FUJI"
          country="Japon"
          distance="9 844 km"
          photo="http://image.noelshack.com/fichiers/2018/39/2/1537868413-japon.jpeg"
        />
      </div>
    );
  }
}

export default App;
