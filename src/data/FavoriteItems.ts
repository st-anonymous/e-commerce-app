import {atom} from 'recoil';
import {FavoriteItemType} from '../Types';

const FavoriteItems = atom<Array<FavoriteItemType>>({
  key: 'FavoriteItems',
  default: [],
});

export default FavoriteItems;
