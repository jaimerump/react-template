import * as ActionType from 'actions/probability'
import _ from 'lodash'

let defaultState = {
  probability: {}
}

export default function(state = defaultState, action) {
  switch(action.type) {
    case ActionType.LOADED_PROBABILITY:
      return _.merge( _.clone(state), action.response );

    default:
      return state
  }
}