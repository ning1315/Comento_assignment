import { takeEvery, put, call, delay } from 'redux-saga/effects';
import axios from 'axios'
import { getAdContents } from '../actions/contentAction'
import { AdType } from '../../module/contents/adType'

function* workerGetAd(){
  let data : Array<AdType> = []
  yield axios.get('https://problem.comento.kr/api/ads?page=1&limit=10')
  .then((res) => {
   data = res.data.data
  })
   yield put(getAdContents(data))
}

export default workerGetAd