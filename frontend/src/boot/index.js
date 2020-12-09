import React, { Component } from "react";
import App from "../App";
import configureStore from "./configureStore";
import { Provider } from "react-redux";
const store = configureStore();
export default class Setup extends Component {
  constructor(props) {
    super(props);
  }
  scomponentDidMount() {}
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
