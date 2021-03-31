import { put } from 'redux-saga/effects';
import axios from 'axios'
import { getViewContent } from '../actions/contentAction'
import { viewType } from '../../module/view/viewType'
import { workerViewType } from '../../module/action/workerViewType'


function* workerViewContent(action : workerViewType){
  let data : Array<viewType> = []
  yield axios.get(`https://problem.comento.kr/api/view?id=${action.id}`).then((res) => data = res.data.data)
  yield put(getViewContent(data))
}

export default workerViewContent