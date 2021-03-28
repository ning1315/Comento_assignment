import { ContentType } from '../../module/contents/contentType';
import { AdType } from '../../module/contents/adType'
import {CONTENTS_WORKER_START , GET_ASC_CONTENTS, GET_DESC_CONTENTS, GET_AD_CONTENTS, AD_WORKER_START, NEXT_CONTENTS_WORKER_START, ADD_NEXT_CONTENT } from './constants';

export const ContentsWorkerStart = (mode : string) => {
  return {
    type : CONTENTS_WORKER_START,
    mode
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

export const nextContentWorkerStart = (pageNum : number, modeNow : string) => {
  return {
    type : NEXT_CONTENTS_WORKER_START,
    pageNum,
    modeNow
  }
}

export const addNextContent = (contents : Array<ContentType>) => {
  return {
    type : ADD_NEXT_CONTENT,
    contents
  }
}

export type ContentAction = | 
ReturnType<typeof getAscContents> | 
ReturnType<typeof getDescContents> |
ReturnType<typeof AdContentsWorkerStart> |
ReturnType<typeof getAdContents> | 
ReturnType<typeof nextContentWorkerStart> |
ReturnType<typeof addNextContent>








