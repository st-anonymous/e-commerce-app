import {atom} from 'recoil';
import {FavoriteItemsType} from '../Types';

const FavoriteItems = atom<Array<FavoriteItemsType>>({
  key: 'FavoriteItems',
  default: [],
});

export default FavoriteItems;
