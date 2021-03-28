import { takeEvery, put, call, delay } from 'redux-saga/effects';
import axios from 'axios'
import { addNextContent } from '../actions/contentAction'
import { ContentType } from '../../module/contents/contentType';


function* workerAddNextContent(action : any){
  yield console.log(action)
  let data : Array<ContentType> = []
  yield axios.get(`https://problem.comento.kr/api/list?page=${action.pageNum}&ord=${action.modeNow}&category[]=1&category[]=2&category[]=3&limit=10`)
  .then((res) => data = res.data.data )
  yield put(addNextContent(data))
}

export default workerAddNextContent
