import {atom} from 'recoil';
import {AvailableItemType} from '../Types';

const AvailableItems = atom<Array<AvailableItemType>>({
  key: 'AvailableItems',
  default: [],
});

export default AvailableItems;
