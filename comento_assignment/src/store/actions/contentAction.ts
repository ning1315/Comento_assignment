import { ContentType } from '../../module/contents/contentType';
import { AdType } from '../../module/contents/adType'
import {CONTENTS_WORKER_START , GET_ASC_CONTENTS, GET_DESC_CONTENTS, GET_AD_CONTENTS, AD_WORKER_START } from './constants';

export const ContentsWorkerStart = () => {
  return {
    type : CONTENTS_WORKER_START
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

export type ContentAction = | 
ReturnType<typeof getAscContents> | 
ReturnType<typeof getDescContents> |
ReturnType<typeof AdContentsWorkerStart> |
ReturnType<typeof getAdContents>








