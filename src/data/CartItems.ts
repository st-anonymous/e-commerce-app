import {atom} from 'recoil';

const CartItems = atom({
  key: 'CartItems',
  default: [],
});

export default CartItems;
