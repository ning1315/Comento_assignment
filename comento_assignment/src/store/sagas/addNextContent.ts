import { put, delay } from 'redux-saga/effects';
import axios from 'axios'
import { addNextContent, getNextAd } from '../actions/contentAction'
import { loadingStart, loadingStop} from '../actions/pageAction'
import { ContentType } from '../../module/contents/contentType';
import { workerAddNextType } from '../../module/action/workerAddNextType'
import { AdType } from '../../module/contents/adType'
import filterMaker from '../../util/filterMaker'

function* workerAddNextContent(action : workerAddNextType){
  const pathCate = filterMaker(action.cate)
  let contentsData : Array<ContentType> = []
  let adData : Array<AdType> = []
  yield axios.get(`https://problem.comento.kr/api/list?page=${action.pageNum}&ord=${action.modeNow}${pathCate}&limit=15`)
  .then((res) => contentsData = res.data.data )
  if(contentsData.length > 0){
    yield put(loadingStart())
  }
  yield axios.get(`https://problem.comento.kr/api/ads?page=${action.pageNum}&limit=3`)
  .then((res) => {
   adData = res.data.data
  })
  yield delay(500)
  yield put(addNextContent(contentsData))
  yield put(getNextAd(adData))
  yield put(loadingStop())
  
}

export default workerAddNextContent
