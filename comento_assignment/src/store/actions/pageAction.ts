import { 
  PAGE_INCREMENT, 
  TO_ASC_MODE, 
  TO_DESC_MODE, 
  GET_ALL_CATEGORY, 
  CATEGORY_WORKER_START,
  FILTER_MODAL_OPEN,
  FILTER_MODAL_CLOSE,
  PICKED_FILTER,
  CHANGE_TO_PICK,
  CHANGE_TO_UNPICK,
  RESET_PAGE,
  GET_BEFORE_CATEGORY,
  LOADING_START,
  LOADING_STOP
} from './constants'
import { categoryType } from '../../module/category/categoryType'

export const pageIncrement = () => {
  return {
    type : PAGE_INCREMENT
  }
}

export const resetPage = () => {
  return {
    type : RESET_PAGE
  }
}

export const toAscMode = () => {
  return {
    type : TO_ASC_MODE
  }
}

export const toDescMode = () => {
  return {
    type : TO_DESC_MODE
  }
}

export const categoryWorkerStart = () => {
  return {
    type : CATEGORY_WORKER_START
  }
}

export const getAllCategory = (category : Array<categoryType>) => {
  return {
    type : GET_ALL_CATEGORY,
    category
  }
}

export const filterModalOpen = () => {
  return {
    type : FILTER_MODAL_OPEN
  }
}

export const filterModalClose = () => {
  return {
    type : FILTER_MODAL_CLOSE
  }
}

export const pickedFilter = (category : Array<categoryType>) => {
  return {
    type : PICKED_FILTER,
    category
  }
}

export const changeToPick = (pick : categoryType) => {
  return {
    type : CHANGE_TO_PICK,
    pick
  }
}

export const changeToUnPick = (pick : categoryType) => {
  return {
    type : CHANGE_TO_UNPICK,
    pick
  }
}

export const getBeforeCategory = (AllCate : Array<categoryType>, BeforeCate : Array<categoryType>) => {
  return {
    type : GET_BEFORE_CATEGORY,
    AllCate,
    BeforeCate
  }
}

export const loadingStart = () => {
  return {
    type : LOADING_START
  }
}

export const loadingStop = () => {
  return {
    type : LOADING_STOP
  }
}

export type PageAction = | 
ReturnType<typeof pageIncrement> |
ReturnType<typeof toAscMode> |
ReturnType<typeof toDescMode> |
ReturnType<typeof categoryWorkerStart> |
ReturnType<typeof getAllCategory> |
ReturnType<typeof filterModalOpen> |
ReturnType<typeof filterModalClose> |
ReturnType<typeof pickedFilter> |
ReturnType<typeof changeToPick> |
ReturnType<typeof changeToUnPick> |
ReturnType<typeof resetPage> |
ReturnType<typeof getBeforeCategory> |
ReturnType<typeof loadingStart> | 
ReturnType<typeof loadingStop>