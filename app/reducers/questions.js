import * as ActionType from 'actions/questions'

let defaultState = {}
function questionsReducer (state = defaultState, action) {
  switch(action.type) {
    case ActionType.LOADED_QUESTIONS:
      return action.response
      break
    default:
      return state
  }
}

export default questionsReducer
