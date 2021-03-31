import { 
  GET_ASC_CONTENTS,
  GET_DESC_CONTENTS,
  GET_AD_CONTENTS,
  ADD_NEXT_CONTENT,
  GET_FILTER_CONTENTS,
  GET_NEXT_AD,
  GET_VIEW_CONTENT
} from '../actions/constants'
import { Reducer } from 'redux';
import { ContentAction } from '../actions/contentAction'
import { contentActionType } from '../../module/action/contentActionType'

const initialState = {
  contentsNow : [],
  AllAd : [],
  viewContent : null
}



export const contentsReducer : Reducer = (state = initialState, action) => {
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
      return {
        ...state,
        viewContent : action.view
      }
    default:
      return state
  }
}