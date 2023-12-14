import {atom} from 'recoil';

const AvailableItems = atom({
  key: 'AvailableItems',
  default: [],
});

export default AvailableItems;
