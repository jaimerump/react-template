import { combineReducers } from 'redux'
import questions from 'reducers/questions'
import questionDetail from 'reducers/questionDetail'

import metric from 'reducers/metric'
import operation from 'reducers/operation'
import probability from 'reducers/probability'

const rootReducer = combineReducers({
  questions,
  questionDetail,

  metric,
  operation,
  probability
})

export default rootReducer
