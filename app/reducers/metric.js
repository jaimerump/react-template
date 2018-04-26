import * as ActionType from 'actions/metric'
import _ from 'lodash'

let defaultState = {
  metric: {}
}

export default function(state = defaultState, action) {
  switch(action.type) {
    case ActionType.LOADED_METRIC:
      return _.merge( _.clone(state), action.response );

    default:
      return state
  }
}