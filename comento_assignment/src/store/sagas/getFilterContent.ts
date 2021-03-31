import { put } from 'redux-saga/effects';
import axios from 'axios'
import { ContentType } from '../../module/contents/contentType';
import { workerFilterType } from '../../module/action/workerFilterType'
import { getFilterContents } from '../actions/contentAction'
import filterMaker from '../../util/filterMaker'

function* workerFilterContent(action : workerFilterType){
  let data : Array<ContentType> = []
  const pathCate = filterMaker(action.picked)
  
  yield axios.get(`https://problem.comento.kr/api/list?limit=10&page=1&ord=asc${String(pathCate)}`).then((res) => data = res.data.data)
  
  yield put(getFilterContents(data))

  
}

export default workerFilterContent
