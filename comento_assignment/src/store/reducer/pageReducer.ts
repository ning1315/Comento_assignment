import { 
  PAGE_INCREMENT, 
  TO_ASC_MODE, 
  TO_DESC_MODE, 
  GET_ALL_CATEGORY,
  FILTER_MODAL_OPEN,
  FILTER_MODAL_CLOSE,
  PICKED_FILTER,
  CHANGE_TO_PICK,
  CHANGE_TO_UNPICK,
  RESET_PAGE,
  GET_BEFORE_CATEGORY
} from '../actions/constants'
import { PageAction } from '../actions/pageAction'
import { categoryType } from '../../module/category/categoryType';
import { Reducer, Action } from 'redux';

const initialState = {
  ascOrDesc : 'asc' ,
  pageNow : 1,
  allCategory : [],
  selectedCategory : [],
  filterModal : false,
  isSelected : {}
}

export const pageReducer : Reducer = (state = initialState, action) => {
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
      let obj : any = {}
      action.category.map((cate : categoryType) => {
        let id = cate.id;
        obj[id] = true;
      })
      return {
        ...state,
        allCategory : action.category,
        selectedCategory : action.category,
        isSelected : {...state.isSelected, ...obj}
      }
    case GET_BEFORE_CATEGORY : 
    let beForeObj : any = {}
      action.AllCate.map((cate : categoryType) => {
        let id = cate.id;
        beForeObj[id] = false;
      })
      action.BeforeCate.map((cate : categoryType) => {
        let id = cate.id;
        beForeObj[id] = true;
      })
      return {
        ...state,
        allCategory : action.AllCate,
        selectedCategory : action.BeforeCate,
        isSelected : {...state.isSelected, ...beForeObj}
      }
    case FILTER_MODAL_OPEN :
      return {
        ...state,
        filterModal : true
      }
    case FILTER_MODAL_CLOSE :
      return {
        ...state,
        filterModal : false
      }
    case PICKED_FILTER :
      let newPicked : any = {}
      for(let key in state.isSelected){
        newPicked[key] = false
        }
      action.category.map((cate : categoryType) => newPicked[cate.id] = true)
      return {
        ...state,
        selectedCategory : action.category,
        isSelected : {...newPicked}
      }
    case CHANGE_TO_PICK :
      let putCopy : Array<categoryType> = Array.from(state.selectedCategory)
      putCopy.push(action.pick)
      return {
        ...state,
        selectedCategory : putCopy
      }
    case CHANGE_TO_UNPICK :
      let deleteCopy : Array<categoryType> = Array.from(state.selectedCategory)
      let filted : Array<categoryType> = deleteCopy.filter((cate : categoryType) => cate.id !== action.pick.id)
      console.log(filted)
      return {
        ...state,
        selectedCategory : filted
      }
    case RESET_PAGE :
      return {
        ...state,
        pageNow : 1
      }
    default:
      return state
  }
}