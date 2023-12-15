import {atom} from 'recoil';
import {CartItemType} from '../Types';

const CartItems = atom<Array<CartItemType>>({
  key: 'CartItems',
  default: [],
});

export default CartItems;
