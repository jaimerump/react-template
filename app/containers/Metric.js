import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadMetric } from 'actions/metric'
import PropTypes from 'prop-types'

class Metric extends Component {
  static fetchData({ store, params }) {
    let { id } = params
    return store.dispatch(loadMetric({}))
  }
  componentDidMount() {
    this.props.loadMetric({})
  }
  render() {
    let { metric } = this.props
    return (
      <div>
        <h1>Example</h1>
        { JSON.stringify(metric, undefined, 2) }
      </div>
    )
  }
}

function mapStateToProps (state) {
  return { metric: state.metric }
}

Metric.propTypes = {
  metric: PropTypes.object.isRequired
}

export { Metric }
export default connect(mapStateToProps, { loadMetric })(Metric)
