import {atom} from 'recoil';
import {RenderingItemType} from '../Types';

const RenderingItems = atom<Array<RenderingItemType>>({
  key: 'RenderingItems',
  default: [],
});

export default RenderingItems;
