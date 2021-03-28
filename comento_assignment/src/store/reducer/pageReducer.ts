import { PAGE_INCREMENT, TO_ASC_MODE, TO_DESC_MODE } from '../actions/constants'
import { PageAction } from '../actions/pageAction'

const initialState = {
  ascOrDesc : 'asc',
  pageNow : 1
}

export const pageReducer = (state = initialState, action : PageAction) => {
  switch (action.type){
    case PAGE_INCREMENT : 
      return {
        ...state,
       pageNow : state.pageNow + 1
      }
    case TO_ASC_MODE :
      return {
        ...state,
        ascOrDesc : 'asc'
      }
    case TO_DESC_MODE :
      return {
        ...state,
        ascOrDesc : 'desc'
      }
    default:
      return state
  }
}