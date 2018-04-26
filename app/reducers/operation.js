import * as ActionType from 'actions/operation'
import _ from 'lodash'

let defaultState = {
  operation: {}
}

export default function(state = defaultState, action) {
  switch(action.type) {
    case ActionType.LOADED_OPERATION:
      return _.merge( _.clone(state), action.response );

    default:
      return state
  }
}