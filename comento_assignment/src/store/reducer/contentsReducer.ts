import { GET_ASC_CONTENTS, GET_DESC_CONTENTS, GET_AD_CONTENTS, ADD_NEXT_CONTENT } from '../actions/constants'
import { ContentAction } from '../actions/contentAction'

const initialState = {
  contentsNow : [],
  AllAd : []
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
    case ADD_NEXT_CONTENT :
      return {
        ...state,
        contentsNow : [...state.contentsNow, ...action.contents]
      }
    default:
      return state
  }
}