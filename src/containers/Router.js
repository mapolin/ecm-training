import React, {
  Component,
  PropTypes
} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  sampleAction
} from '../actions/'

import { withRouter } from 'react-router-dom'
import RouteList from '../routes'
import '../components/app.css'

class App extends Component {
  render() {
    return (
      <RouteList />
    )
  }
}

App.defaultProps = {
}
App.propTypes = {
  actions: PropTypes.shape({})
}
function mapStateToProps(state) {
  const props = {}
  return props
}
function mapDispatchToProps(dispatch) {
  const actions = { sampleAction }
  const actionMap = { actions: bindActionCreators(actions, dispatch) }
  return actionMap
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
