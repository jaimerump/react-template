import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import { browserHistory } from 'react-router'

import configureStore from 'store/configureStore'
import createRoutes from 'routes/index'
import { Provider } from 'react-redux'
import _ from 'lodash'

let reduxState = {}
if (window.__REDUX_STATE__) {
  try {
    let plain = JSON.parse(unescape(__REDUX_STATE__))
    _.each(plain, (val, key)=> {
      reduxState[key] = val
    })
  } catch (e) {
  }
}

const store = configureStore(reduxState)

ReactDOM.render((
  <Provider store={store}>
    { createRoutes(browserHistory) }
  </Provider>
), document.getElementById('root'))
