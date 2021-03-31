import { takeEvery } from 'redux-saga/effects';
import {
  CONTENTS_WORKER_START,
  AD_WORKER_START, 
  NEXT_CONTENTS_WORKER_START, 
  CATEGORY_WORKER_START, 
  FILTER_CONTENT_WORKER_START, 
  VIEW_CONTENT_WORKER_START
} from '../actions/constants'
import workerGetAscContents from './getAscContent'
import workerGetAd from './getAd'
import workerAddNextContent from './addNextContent'
import workerGetCategory from './getCategory'
import workerFilterContent from './getFilterContent'
import workerViewContent from './getViewContent'

function* rootSaga(){
  yield takeEvery(CONTENTS_WORKER_START, workerGetAscContents);
  yield takeEvery(AD_WORKER_START, workerGetAd)
  yield takeEvery(NEXT_CONTENTS_WORKER_START, workerAddNextContent)
  yield takeEvery(CATEGORY_WORKER_START, workerGetCategory)
  yield takeEvery(FILTER_CONTENT_WORKER_START, workerFilterContent)
  yield takeEvery(VIEW_CONTENT_WORKER_START, workerViewContent)
}

export default rootSaga