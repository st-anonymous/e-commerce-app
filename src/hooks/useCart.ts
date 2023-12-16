import {useRecoilState, useRecoilValue} from 'recoil';
import AvailableItems from '../data/AvailableItems';
import CartItems from '../data/CartItems';

const useCart = () => {
  const [cartItems, setCartItems] = useRecoilState(CartItems);
  const availableItems = useRecoilValue(AvailableItems);

  const HandleAddToCart = (id: number) => {
    let newCartItems;
    let currItem = cartItems.filter(item => item.id === id)[0];
    if (currItem) {
      currItem = {...currItem, itemCount: currItem.itemCount + 1};
      newCartItems = cartItems.map(item => {
        if (item.id === id) {
          return currItem;
        } else {
          return item;
        }
      });
    } else {
      const currAvailableItem = availableItems.filter(
        item => item.id === id,
      )[0];
      currItem = {
        id: currAvailableItem.id,
        title: currAvailableItem.title,
        price: currAvailableItem.price,
        discountPercentage: currAvailableItem.discountPercentage,
        thumbnail: currAvailableItem.thumbnail,
        itemCount: 1,
      };
      newCartItems = [...cartItems, currItem];
    }

    setCartItems(newCartItems);
  };

  const HandleRemoveFromCart = (id: number) => {
    let newCartItems;
    let currItem = cartItems.filter(item => item.id === id)[0];
    if (currItem.itemCount > 1) {
      currItem = {...currItem, itemCount: currItem.itemCount - 1};
      newCartItems = cartItems.map(item => {
        if (item.id === id) {
          return currItem;
        } else {
          return item;
        }
      });
    } else {
      newCartItems = cartItems.filter(item => item.id !== id);
    }
    setCartItems(newCartItems);
  };

  const ClearCart = () => {
    setCartItems([]);
  };

  return {cartItems, HandleAddToCart, HandleRemoveFromCart, ClearCart};
};

export default useCart;
