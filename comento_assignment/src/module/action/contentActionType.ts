import { AdType } from '../contents/adType'
import { ContentType } from '../contents/contentType'
import { viewType } from '../view/viewType'

export interface contentActionType {
  type: string;
  contents : Array<ContentType>;
  ad : Array<AdType>;
  view : Array<viewType>
}