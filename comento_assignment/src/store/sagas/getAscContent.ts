import { takeEvery, put, call, delay } from 'redux-saga/effects';
import { getAscContents } from '../actions/contentAction'
import { ContentType } from '../../module/contents/contentType';
import axios from 'axios'

interface bodyType {
  page : number
  ord : string
  category : Array<string>
  limit: number
}


function* workerGetAscContents(){
  let data : Array<ContentType> = []
  yield axios.get('https://problem.comento.kr/api/list?page=1&ord=asc&category[]=1&category[]=2&category[]=3&limit=10')
  .then((res) => {
    data = res.data.data
  });
  console.log(data)
  yield put(getAscContents(data))
}

export default workerGetAscContents