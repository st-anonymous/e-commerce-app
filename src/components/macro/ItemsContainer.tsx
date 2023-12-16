import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import ItemCard from './ItemCard';
import {
  AvailableItemType,
  FavoriteItemType,
  ItemsContainerType,
} from '../../Types';

const ItemsContainer = (props: ItemsContainerType) => {
  const {items} = props;

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>
      {items.map((item: AvailableItemType | FavoriteItemType) => {
        return (
          <ItemCard
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            thumbnail={item.thumbnail}
            isFavorite={item.isFavorite ? true : false}
          />
        );
      })}
    </ScrollView>
  );
};

export default ItemsContainer;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#FFFFFF',
  },
  contentContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingBottom: 75,
  },
});
