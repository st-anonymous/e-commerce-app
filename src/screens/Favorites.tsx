import React from 'react';
import Tabs from '../components/macro/Tabs';
import Header from '../components/macro/Header';
import {useRecoilValue} from 'recoil';
import FavoriteItems from '../data/FavoriteItems';
import ItemsContainer from '../components/macro/ItemsContainer';

const Favorites = () => {
  const favoriteItems = useRecoilValue(FavoriteItems);
  return (
    <>
      <Header text={'favorites'} backButton={false} cartIcon={true} />
      <ItemsContainer items={favoriteItems} />
      <Tabs />
    </>
  );
};

export default Favorites;
