import { categoryType } from '../category/categoryType'

export interface workerAddNextType {
  type : string;
  cate : Array<categoryType>;
  pageNum : number;
  modeNow : string;
}