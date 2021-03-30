import { takeEvery, put, call, delay } from 'redux-saga/effects';
import { getAscContents } from '../actions/contentAction'
import { ContentType } from '../../module/contents/contentType';
import axios from 'axios'
import filterMaker from '../../util/filterMaker'


interface ActionType {
  type : string
  mode : string
}

function* workerGetAscContents(action : any){
  let modeNow = action.mode
  let cateArr = action.cate
  let data : Array<ContentType> = []
  let beForeAscDesc = localStorage.getItem('ascDesc')
  let beForeCate = localStorage.getItem('Filter')
  console.log(beForeAscDesc)
  if(beForeAscDesc !== null){
    modeNow = beForeAscDesc
  }
  if(beForeCate !== null){
    cateArr = JSON.parse(beForeCate)
  }
  const pathCate = filterMaker(cateArr)
  if(cateArr.length === 0){
    yield axios.get(`https://problem.comento.kr/api/list?page=1&ord=${modeNow}&category[]=1&category[]=2&category[]=3&limit=10`)
    .then((res) => {
      data = res.data.data
    });
  } else {
    yield axios.get(`https://problem.comento.kr/api/list?page=1&ord=${modeNow}${pathCate}&limit=10`)
    .then((res) => {
      data = res.data.data
    });
  }
  
  yield put(getAscContents(data))
}

export default workerGetAscContents