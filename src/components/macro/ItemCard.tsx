/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Typo from '../micro/Typo';
import {ItemCardTypes} from '../../Types';
import {useNavigation} from '@react-navigation/native';
import useFavorite from '../../hooks/useFavorite';
import useCart from '../../hooks/useCart';
import {useRecoilValue, useSetRecoilState} from 'recoil';
import CurrentItem from '../../data/CurrentItem';
import AvailableItems from '../../data/AvailableItems';

const ItemCard = (props: ItemCardTypes) => {
  const {id, title, price, thumbnail, isFavorite} = props;
  const {HandleFavoriteToggle} = useFavorite();
  const {HandleAddToCart} = useCart();
  const availableItems = useRecoilValue(AvailableItems);
  const setCurrentItem = useSetRecoilState(CurrentItem);

  const navigation = useNavigation();

  const HandleProductDetails = () => {
    setCurrentItem(availableItems.filter(item => item.id === id)[0]);
    navigation.navigate('ProductDisplay' as never);
  };

  return (
    <TouchableWithoutFeedback onPress={HandleProductDetails}>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => HandleFavoriteToggle(id)}
          style={styles.toggleFavorite}>
          <Image
            source={
              isFavorite
                ? require('../../assets/icons/favorite.png')
                : require('../../assets/icons/non_favorite.png')
            }
            style={styles.favoriteImage}
          />
        </TouchableOpacity>
        <View>
          <Image
            source={{
              uri: thumbnail,
            }}
            style={styles.thumbnailImage}
          />
        </View>
        <View style={styles.lowerContainer}>
          <View>
            <Typo
              text={`$ ${price}`}
              variant={'b2'}
              styleProps={{fontWeight: 'bold', color: '#1E222B'}}
            />
            <Typo text={title} variant={'l'} styleProps={{color: '#616A7D'}} />
          </View>
          <TouchableOpacity
            onPress={() => HandleAddToCart(id)}
            style={styles.addToCartContainer}>
            <Image
              source={require('../../assets/icons/plus.png')}
              style={styles.addToCartImage}
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default React.memo(ItemCard);

const styles = StyleSheet.create({
  container: {
    width: 160,
    height: 194,
    backgroundColor: '#F8F9FB',
    borderRadius: 12,
    padding: 6,
    margin: 10,
    justifyContent: 'space-between',
  },
  toggleFavorite: {
    position: 'absolute',
    top: 15,
    left: 15,
    zIndex: 2,
    elevation: 10,
  },
  favoriteImage: {
    resizeMode: 'center',
    width: 20,
    height: 20,
  },
  thumbnailImage: {
    resizeMode: 'stretch',
    width: 148,
    height: 100,
    borderRadius: 12,
  },
  lowerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  addToCartContainer: {
    backgroundColor: '#153075',
    padding: 5,
    borderRadius: 10,
    position: 'absolute',
    right: 6,
    top: 0,
  },
  addToCartImage: {
    resizeMode: 'center',
    width: 10,
    height: 10,
  },
});
