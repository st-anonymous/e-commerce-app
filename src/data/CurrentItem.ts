import {atom} from 'recoil';
import {CurrentItemType} from '../Types';

const CurrentItem = atom<CurrentItemType>({
  key: 'CurrentItem',
  default: undefined,
});

export default CurrentItem;
