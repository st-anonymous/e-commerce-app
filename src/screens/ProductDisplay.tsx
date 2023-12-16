import React from 'react';
import {StyleSheet, View} from 'react-native';
import Header from '../components/macro/Header';
import {Rating} from 'react-native-elements';
import Typo from '../components/micro/Typo';
import ProductImageCarousal from '../components/macro/ProductImageCarousal';
import {useRecoilValue} from 'recoil';
import CurrentItem from '../data/CurrentItem';
import Button from '../components/micro/Button';
import useCart from '../hooks/useCart';
import {useNavigation} from '@react-navigation/native';

const ProductDisplay = () => {
  const currentItem = useRecoilValue(CurrentItem);
  const {HandleAddToCart} = useCart();

  const offer = (currentItem.price * currentItem.discountPercentage) / 100;
  const price = currentItem.price - offer;

  const navigation = useNavigation();

  const HandleBuyNow = () => {
    HandleAddToCart(currentItem.id);
    navigation.navigate('Checkout' as never);
  };

  return (
    <View style={styles.container}>
      <Header cartIcon={true} />
      <View style={styles.header}>
        <Typo text={currentItem.title} variant={'h1'} color={'#1E222B'} />
        <Rating
          readonly
          imageSize={10}
          startingValue={4}
          type={'custom'}
          ratingColor={'#F9B023'}
        />
      </View>
      <ProductImageCarousal
        id={currentItem.id}
        images={currentItem.images}
        isFavorite={currentItem.isFavorite ? true : false}
      />
      <View style={styles.priceTag}>
        <Typo
          text={`$${currentItem.price.toString()}`}
          variant={'b1'}
          color={'#153075'}
          styleProps={styles.originalPrice}
        />
        <Typo
          text={`$${price.toFixed(2).toString()}`}
          variant={'b1'}
          color={'#153075'}
        />
        <Typo
          text={`$${offer.toFixed(2)} off`}
          variant={'b2'}
          color={'#FFFFFF'}
          styleProps={styles.discountText}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          type={'secondary'}
          size={'small'}
          text={'Add To Cart'}
          onClick={() => HandleAddToCart(currentItem.id)}
        />
        <Button
          type={'primary'}
          size={'small'}
          text={'Buy Now'}
          onClick={HandleBuyNow}
        />
      </View>
      <View style={styles.detailsHeading}>
        <Typo text={'Details'} variant={'h3'} color={'#1E222B'} />
      </View>
      <View style={styles.detailsContainer}>
        <Typo text={currentItem.description} variant={'b1'} color={'#8891A5'} />
      </View>
    </View>
  );
};

export default ProductDisplay;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    height: '100%',
  },
  header: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  originalPrice: {
    textDecorationLine: 'line-through',
    marginRight: 10,
  },
  priceTag: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  discountText: {
    backgroundColor: '#153075',
    marginHorizontal: 10,
    padding: 2.5,
    paddingHorizontal: 10,
    borderRadius: 15,
  },
  buttonContainer: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detailsHeading: {
    paddingTop: 30,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  detailsContainer: {
    paddingTop: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});
