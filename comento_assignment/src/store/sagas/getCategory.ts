import { takeEvery, put, call, delay } from 'redux-saga/effects';
import axios from 'axios'
import { categoryType } from '../../module/category/categoryType'
import { getAllCategory } from '../actions/pageAction'


function* workerGetCategory(){
  let data : Array<categoryType> = []
  yield axios.get('https://problem.comento.kr/api/category').then((res) => data = res.data.category)
  yield put(getAllCategory(data))

}

export default workerGetCategory
