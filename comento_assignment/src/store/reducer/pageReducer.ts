import { PAGE_INCREMENT } from '../actions/constants'
import { PageAction } from '../actions/pageAction'

const initialState = {
  pageNow : 1
}

export const pageReducer = (state = initialState, action : PageAction) => {
  switch (action.type){
    case PAGE_INCREMENT : 
    return {
      ...state,
      pageNow : state.pageNow + 1
    }
    default:
      return state
  }
}