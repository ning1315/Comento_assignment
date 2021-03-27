import { takeEvery } from 'redux-saga/effects';
import {CONTENTS_WORKER_START, GET_ASC_CONTENTS, GET_DESC_CONTENTS, AD_WORKER_START} from '../actions/constants'
import workerGetAscContents from './getAscContent'
import workerGetAd from './getAd'

function* rootSaga(){
  yield takeEvery(CONTENTS_WORKER_START, workerGetAscContents);
  // yield takeEvery(GET_DESC_CONTENTS);
  yield takeEvery(AD_WORKER_START, workerGetAd)
}

export default rootSaga