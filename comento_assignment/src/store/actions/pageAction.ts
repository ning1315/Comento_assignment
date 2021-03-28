import { PAGE_INCREMENT, TO_ASC_MODE, TO_DESC_MODE, GET_ALL_CATEGORY, CATEGORY_WORKER_START } from './constants'
import { categoryType } from '../../module/category/categoryType'
import { Type } from 'typescript'

export const pageIncrement = () => {
  return {
    type : PAGE_INCREMENT
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

export type PageAction = | 
ReturnType<typeof pageIncrement> |
ReturnType<typeof toAscMode> |
ReturnType<typeof toDescMode> |
ReturnType<typeof categoryWorkerStart> |
ReturnType<typeof getAllCategory>