import { put } from 'redux-saga/effects';
import axios from 'axios'
import { categoryType } from '../../module/category/categoryType'
import { getAllCategory, getBeforeCategory } from '../actions/pageAction'


function* workerGetCategory(){
  let data : Array<categoryType> = []
  yield axios.get('https://problem.comento.kr/api/category').then((res) => data = res.data.category)
  let beforeCate = localStorage.getItem('Filter')
  if(beforeCate !== null){
    yield put(getBeforeCategory(data, JSON.parse(beforeCate)))
  } else {
    yield put(getAllCategory(data))
  }
  

}

export default workerGetCategory
