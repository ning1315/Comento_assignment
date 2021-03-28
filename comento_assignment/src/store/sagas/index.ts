import { takeEvery } from 'redux-saga/effects';
import {CONTENTS_WORKER_START, GET_ASC_CONTENTS, GET_DESC_CONTENTS, AD_WORKER_START, NEXT_CONTENTS_WORKER_START, CATEGORY_WORKER_START} from '../actions/constants'
import workerGetAscContents from './getAscContent'
import workerGetAd from './getAd'
import workerAddNextContent from './addNextContent'
import workerGetCategory from './getCategory'

function* rootSaga(){
  yield takeEvery(CONTENTS_WORKER_START, workerGetAscContents);
  yield takeEvery(AD_WORKER_START, workerGetAd)
  yield takeEvery(NEXT_CONTENTS_WORKER_START, workerAddNextContent)
  yield takeEvery(CATEGORY_WORKER_START, workerGetCategory)
}

export default rootSaga