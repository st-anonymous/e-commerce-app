import {useRecoilState} from 'recoil';
import FavoriteItems from '../data/FavoriteItems';
import AvailableItems from '../data/AvailableItems';

const useFavorite = () => {
  const [favoriteItems, setFavoriteItems] = useRecoilState(FavoriteItems);
  const [availableItems, setAvailableItems] = useRecoilState(AvailableItems);

  const HandleFavoriteToggle = (id: number) => {
    let currAvailableItem = availableItems.filter(item => item.id === id)[0];
    setAvailableItems(
      availableItems.map(item => {
        if (item.id === id) {
          return {...item, isFavorite: !item.isFavorite};
        } else {
          return item;
        }
      }),
    );
    const isCurrFavorite = favoriteItems.filter(item => item.id === id);
    if (isCurrFavorite.length) {
      setFavoriteItems(prev => {
        return prev.filter(item => item.id !== id);
      });
    } else {
      setFavoriteItems(prev => {
        return [
          {
            id: currAvailableItem.id,
            title: currAvailableItem.title,
            price: currAvailableItem.price,
            discountPercentage: currAvailableItem.discountPercentage,
            thumbnail: currAvailableItem.thumbnail,
            isFavorite: true,
          },
          ...prev,
        ];
      });
    }
  };
  return {HandleFavoriteToggle};
};

export default useFavorite;
