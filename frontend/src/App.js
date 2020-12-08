import React, { Component } from "react";
import axios from "axios";
class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    axios.get("/user").then((res) => {
      console.log("user", res.data.name);
    });
  }

  render() {
    return <p>React Express Boilerplate - Frontend</p>;
  }
}

export default App;
