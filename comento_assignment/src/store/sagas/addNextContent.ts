import { takeEvery, put, call, delay } from 'redux-saga/effects';
import axios from 'axios'
import { addNextContent, getNextAd } from '../actions/contentAction'
import { ContentType } from '../../module/contents/contentType';
import { AdType } from '../../module/contents/adType'
import filterMaker from '../../util/filterMaker'

function* workerAddNextContent(action : any){
  const pathCate = filterMaker(action.cate)
  let contentsData : Array<ContentType> = []
  let adData : Array<AdType> = []
  yield axios.get(`https://problem.comento.kr/api/list?page=${action.pageNum}&ord=${action.modeNow}${pathCate}&limit=10`)
  .then((res) => contentsData = res.data.data )

  yield axios.get(`https://problem.comento.kr/api/ads?page=${action.pageNum}&limit=2`)
  .then((res) => {
   adData = res.data.data
  })
  yield put(addNextContent(contentsData))
  yield put(getNextAd(adData))
}

export default workerAddNextContent
