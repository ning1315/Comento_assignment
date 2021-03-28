import { PAGE_INCREMENT, TO_ASC_MODE, TO_DESC_MODE, GET_ALL_CATEGORY } from '../actions/constants'
import { PageAction } from '../actions/pageAction'

const initialState = {
  ascOrDesc : 'asc',
  pageNow : 1,
  allCategory : []
}

export const pageReducer = (state = initialState, action : any) => {
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
    case GET_ALL_CATEGORY :
      return {
        ...state,
        allCategory : action.category
      }
    default:
      return state
  }
}