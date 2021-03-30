import { takeEvery, put, call, delay } from 'redux-saga/effects';
import axios from 'axios'
import { getViewContent } from '../actions/contentAction'


function* workerViewContent(action : any){
  let data : any = null
  yield axios.get(`https://problem.comento.kr/api/view?id=${action.id}`).then((res) => data = res.data.data)
  console.log(data)
  yield put(getViewContent(data))
}

export default workerViewContent