import {atom} from 'recoil';

const FavoriteItems = atom({
  key: 'FavoriteItems',
  default: [],
});

export default FavoriteItems;
