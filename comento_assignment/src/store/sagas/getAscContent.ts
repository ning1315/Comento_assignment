import { takeEvery, put, call, delay } from 'redux-saga/effects';
import { getAscContents } from '../actions/contentAction'
import { ContentType } from '../../module/contents/contentType';
import axios from 'axios'


interface ActionType {
  type : string
  mode : string
}

function* workerGetAscContents(action : ActionType){
  console.log(action.mode)
  let data : Array<ContentType> = []
  yield axios.get(`https://problem.comento.kr/api/list?page=1&ord=${action.mode}&category[]=1&category[]=2&category[]=3&limit=10`)
  .then((res) => {
    data = res.data.data
  });
  yield put(getAscContents(data))
}

export default workerGetAscContents