import React, { Component } from "react";
import { GetUsers } from "./actions";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
class LoadingContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    return <p>Calling users endpoint from backend</p>;
  }
}

const mapStateToProps = createStructuredSelector({});

export function mapDispatchToProps(dispatch, ownProps) {
  return {
    dispatch,
    getUsers: () => {
      dispatch(GetUsers());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoadingContainer);
