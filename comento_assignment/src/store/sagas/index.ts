import { takeEvery } from 'redux-saga/effects';
import {CONTENTS_WORKER_START, GET_ASC_CONTENTS, GET_DESC_CONTENTS} from '../actions/constants'
import workerGetAscContents from './getAscContent'

function* rootSaga(){
  yield takeEvery(CONTENTS_WORKER_START, workerGetAscContents);
  // yield takeEvery(GET_DESC_CONTENTS);
}

export default rootSaga