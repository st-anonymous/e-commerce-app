/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import Typo from '../micro/Typo';
import {useRecoilValue} from 'recoil';
import CartItems from '../../data/CartItems';
import {HeaderProps} from '../../Types';

const Header = (props: HeaderProps) => {
  const {
    text = '',
    textVariant = 'b1',
    backButton = true,
    cartIcon = false,
    isHome = false,
  } = props;
  const cartItems = useRecoilValue(CartItems);
  return (
    <View
      style={{
        ...styles.container,
        height: isHome ? 100 : 60,
        backgroundColor: isHome ? '#2A4BA0' : '#FFFFFF',
      }}>
      {backButton ? (
        <TouchableOpacity style={styles.backButton}>
          <Image
            source={require('../../assets/icons/backIcon.png')}
            style={styles.image}
          />
        </TouchableOpacity>
      ) : null}
      {text ? (
        <View style={{...styles.headerText, width: isHome ? '100%' : '70%'}}>
          <Typo
            text={text}
            variant={textVariant}
            color={isHome ? '#FFFFFF' : '#1E222B'}
          />
        </View>
      ) : null}
      {cartIcon ? (
        <TouchableOpacity style={styles.cartButton}>
          <Image
            source={
              isHome
                ? require('../../assets/icons/bagWhite.png')
                : require('../../assets/icons/bagBlack.png')
            }
            style={styles.image}
          />
          {cartItems.length ? (
            <View style={styles.counter}>
              <Typo
                text={cartItems.length.toString()}
                variant={'b2'}
                color={'#FFFFFF'}
              />
            </View>
          ) : null}
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },
  backButton: {
    position: 'absolute',
    left: 20,
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#E7ECF0',
  },
  cartButton: {
    position: 'absolute',
    right: 10,
    borderRadius: 20,
  },
  counter: {
    position: 'absolute',
    top: -5,
    right: 15,
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#F9B023',
  },
  headerText: {
    width: '70%',
    paddingHorizontal: 10,
    alignItems: 'flex-start',
  },
  image: {
    height: 20,
    resizeMode: 'center',
  },
});
