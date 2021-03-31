import { put } from 'redux-saga/effects';
import { getAscContents } from '../actions/contentAction'
import { ContentType } from '../../module/contents/contentType';
import { categoryType } from '../../module/category/categoryType'
import { workerGetAscType } from '../../module/action/workerGetAscType'
import axios from 'axios'
import filterMaker from '../../util/filterMaker'


function* workerGetAscContents(action : workerGetAscType){
  let modeNow : string = action.mode
  let cateArr : categoryType[] = action.cate
  let AllCate : categoryType[] = []
  let data : Array<ContentType> = []
  let beForeAscDesc = localStorage.getItem('ascDesc')
  let beForeCate = localStorage.getItem('Filter')
  if(beForeAscDesc !== null){
    modeNow = beForeAscDesc
  }
  if(beForeCate !== null){
    cateArr = JSON.parse(beForeCate)
  }
  yield axios.get('https://problem.comento.kr/api/category').then((res) => AllCate = res.data.category)

  const pathCate = filterMaker(cateArr)
  if(cateArr.length === 0){
    const pathAllCate = filterMaker(AllCate)
    yield axios.get(`https://problem.comento.kr/api/list?page=1&ord=${modeNow}${pathAllCate}&limit=15`)
    .then((res) => {
      data = res.data.data
    });
  } else {
    yield axios.get(`https://problem.comento.kr/api/list?page=1&ord=${modeNow}${pathCate}&limit=15`)
    .then((res) => {
      data = res.data.data
    });
  }
  
  yield put(getAscContents(data))
}

export default workerGetAscContents