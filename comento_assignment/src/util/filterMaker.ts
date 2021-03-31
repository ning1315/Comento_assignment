import { categoryType } from '../module/category/categoryType';

const filterMaker = (category : Array<categoryType>) => {
  let path : string = '';
  for(let i = 0; i < category.length; i++){
    path+= `&category[]=${category[i].id}`
  }
  return path
}

export default filterMaker