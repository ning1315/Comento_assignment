import { combineReducers } from 'redux'
import { contentsReducer } from './contentsReducer'

const rootReducer = combineReducers({
  contentsStatus : contentsReducer
})

export default rootReducer
export type RootState = ReturnType<typeof rootReducer>;