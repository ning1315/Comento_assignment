import { PAGE_INCREMENT } from './constants'

export const pageIncrement = () => {
  return {
    type : PAGE_INCREMENT
  }
}

export type PageAction = | 
ReturnType<typeof pageIncrement>