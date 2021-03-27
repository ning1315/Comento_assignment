import { combineReducers } from 'redux'
import { contentsReducer } from './contentsReducer'
import { pageReducer } from './pageReducer'

const rootReducer = combineReducers({
  contentsStatus : contentsReducer,
  pageStatus : pageReducer
})

export default rootReducer
export type RootState = ReturnType<typeof rootReducer>;