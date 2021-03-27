import { GET_ASC_CONTENTS, GET_DESC_CONTENTS, GET_AD_CONTENTS} from '../actions/constants'
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
    default:
      return state
  }
}