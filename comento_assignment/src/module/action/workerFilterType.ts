import { categoryType } from '../category/categoryType'

export interface workerFilterType {
  type : string
  picked : Array<categoryType>
}