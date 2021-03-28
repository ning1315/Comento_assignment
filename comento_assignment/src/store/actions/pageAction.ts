import { PAGE_INCREMENT, TO_ASC_MODE, TO_DESC_MODE } from './constants'

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

export type PageAction = | 
ReturnType<typeof pageIncrement> |
ReturnType<typeof toAscMode> |
ReturnType<typeof toDescMode>