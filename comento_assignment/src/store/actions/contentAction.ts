import { ContentType } from '../../module/contents/contentType';
import { AdType } from '../../module/contents/adType'
import {
  CONTENTS_WORKER_START,
  GET_ASC_CONTENTS, 
  GET_DESC_CONTENTS, 
  GET_AD_CONTENTS,
  GET_NEXT_AD,
  AD_WORKER_START, 
  NEXT_CONTENTS_WORKER_START, 
  ADD_NEXT_CONTENT,
  GET_FILTER_CONTENTS,
  FILTER_CONTENT_WORKER_START,
  VIEW_CONTENT_WORKER_START,
  GET_VIEW_CONTENT
} from './constants';
import { categoryType } from '../../module/category/categoryType';
import { viewType } from '../../module/view/viewType'

export const ContentsWorkerStart = (mode : string, cate : Array<categoryType>) => {
  return {
    type : CONTENTS_WORKER_START,
    mode,
    cate
  }
}

export const AdContentsWorkerStart = () => {
  return {
    type : AD_WORKER_START
  }
}

export const getAscContents = (contents : Array<ContentType>) => {
  return {
    type : GET_ASC_CONTENTS,
    contents
  }
}

export const getDescContents = (contents : Array<ContentType>) => {
  return {
    type : GET_DESC_CONTENTS,
    contents
  }
}

export const getAdContents = (ad: Array<AdType>) => {
  return {
    type : GET_AD_CONTENTS,
    ad
  }
}

export const getNextAd = (ad : Array<AdType>) => {
  return {
    type : GET_NEXT_AD,
    ad
  }
}

export const nextContentWorkerStart = (pageNum : number, modeNow : string, cate : Array<categoryType>) => {
  return {
    type : NEXT_CONTENTS_WORKER_START,
    pageNum,
    modeNow,
    cate
  }
}

export const addNextContent = (contents : Array<ContentType>) => {
  return {
    type : ADD_NEXT_CONTENT,
    contents
  }
}

export const filterContentWorkerStart = (picked : Array<categoryType>, modeNow : string) => {
  return {
    type : FILTER_CONTENT_WORKER_START,
    picked,
    modeNow
  }
}

export const getFilterContents = (contents : Array<ContentType>) => {
  return {
    type : GET_FILTER_CONTENTS,
    contents
  }
}

export const viewContentWorkerStart = (id : number) => {
  return {
    type : VIEW_CONTENT_WORKER_START,
    id
  }
}

export const getViewContent = (view : Array<viewType>) => {
  return {
    type : GET_VIEW_CONTENT,
    view
  }
}

export type ContentAction = | 
ReturnType<typeof getAscContents> | 
ReturnType<typeof getDescContents> |
ReturnType<typeof AdContentsWorkerStart> |
ReturnType<typeof getAdContents> | 
ReturnType<typeof nextContentWorkerStart> |
ReturnType<typeof addNextContent> |
ReturnType<typeof getFilterContents> |
ReturnType<typeof filterContentWorkerStart> |
ReturnType<typeof getNextAd> |
ReturnType<typeof viewContentWorkerStart> |
ReturnType<typeof getViewContent>








