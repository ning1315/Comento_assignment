import { GET_ASC_CONTENTS, GET_DESC_CONTENTS} from '../actions/constants'
import { ContentAction } from '../actions/contentAction'

const initialState = {
  contentsNow : []
}



export const contentsReducer = (state = initialState, action : ContentAction) => {
  switch(action.type){
    case GET_ASC_CONTENTS : 
    return {
      ...state,
      contentsNow : action.contents
    }
    default:
      return state
  }
}