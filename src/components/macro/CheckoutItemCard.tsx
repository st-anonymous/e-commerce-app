import React from 'react';
import Typo from '../micro/Typo';
import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {CheckoutItemType} from '../../Types';

const CheckoutItemCard = (props: CheckoutItemType) => {
  const {
    id,
    title,
    price,
    discountPercentage,
    thumbnail,
    itemCount,
    HandleAddToCart,
    HandleRemoveFromCart,
  } = props;

  const offer = (price * discountPercentage) / 100;
  const sellPrice = price - offer;

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Image source={{uri: thumbnail}} style={styles.thumbnailStyle} />
        <View style={styles.titleAndPrice}>
          <Typo color={'#1E222B'} text={title} variant={'b1'} />
          <Typo
            color={'#1E222B'}
            text={sellPrice?.toFixed(2)?.toString()}
            variant={'b2'}
          />
        </View>
        <View style={styles.itemCounter}>
          <TouchableOpacity
            onPress={() => HandleRemoveFromCart(id)}
            style={styles.increamentButton}>
            <Typo color={'#1E222B'} text={'-'} variant={'btn2'} />
          </TouchableOpacity>
          <View style={styles.increamentText}>
            <Typo
              color={'#1E222B'}
              text={itemCount?.toString()}
              variant={'btn2'}
            />
          </View>
          <TouchableOpacity
            onPress={() => HandleAddToCart(id)}
            style={styles.increamentButton}>
            <Typo color={'#1E222B'} text={'+'} variant={'btn2'} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.horizontalDivider} />
    </View>
  );
};

export default CheckoutItemCard;

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '90%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  thumbnailStyle: {
    height: 50,
    aspectRatio: 1,
    resizeMode: 'contain',
  },
  titleAndPrice: {
    width: '60%',
    flexDirection: 'column',
    paddingLeft: 10,
  },
  itemCounter: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  increamentButton: {
    height: 20,
    width: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#F8F9FB',
  },
  increamentText: {
    height: 20,
    width: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  horizontalDivider: {
    height: 1,
    width: '90%',
    backgroundColor: '#1E222B',
    alignSelf: 'center',
    margin: 10,
  },
});
