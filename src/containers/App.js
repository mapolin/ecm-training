import React, { Component, PropTypes } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { sampleAction } from "../actions/";

import PageWrapper from "../components/PageWrapper";
import "../components/app.css";

class App extends Component {
  componentDidMount() {}
  render() {
    const { actions, cards } = this.props;

    return <PageWrapper cards={cards} actions={actions} />;
  }
}

App.defaultProps = {};
App.propTypes = {
  actions: PropTypes.shape({})
};
function mapStateToProps(state) {
  const props = {
    ...state
  };
  return props;
}
function mapDispatchToProps(dispatch) {
  const actions = { sampleAction };
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
