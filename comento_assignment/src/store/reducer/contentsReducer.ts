import { 
  GET_ASC_CONTENTS,
  GET_DESC_CONTENTS,
  GET_AD_CONTENTS,
  ADD_NEXT_CONTENT,
  GET_FILTER_CONTENTS,
  GET_NEXT_AD,
  GET_VIEW_CONTENT
} from '../actions/constants'
import { ContentAction } from '../actions/contentAction'

const initialState = {
  contentsNow : [],
  AllAd : [],
  viewContent : null
}



export const contentsReducer = (state = initialState, action : any) => {
  switch(action.type){
    case GET_ASC_CONTENTS : 
      return {
        ...state,
        contentsNow : action.contents
      }
    case GET_AD_CONTENTS : 
      return {
        ...state,
        AllAd : action.ad
      }
    case GET_NEXT_AD :
      return {
        ...state,
        AllAd : [...state.AllAd, ...action.ad]
      }
    case ADD_NEXT_CONTENT :
      return {
        ...state,
        contentsNow : [...state.contentsNow, ...action.contents]
      }
    case GET_FILTER_CONTENTS : 
      return {
        ...state,
        contentsNow : action.contents
      }
    case GET_VIEW_CONTENT :
      console.log(action)
      return {
        ...state,
        viewContent : action.view
      }
    default:
      return state
  }
}