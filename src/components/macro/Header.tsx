import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import Typo from '../micro/Typo';
import {useRecoilValue} from 'recoil';
import CartItems from '../../data/CartItems';

type HeaderProps = {
  text?: string;
  backButton?: boolean;
  cartIcon?: boolean;
};

const Header = (props: HeaderProps) => {
  const {text = '', backButton = true, cartIcon = false} = props;
  const cartItems = useRecoilValue(CartItems);
  return (
    <View style={styles.container}>
      {backButton ? (
        <TouchableOpacity style={styles.backButton}>
          <Image
            source={require('../../assets/icons/backIcon.png')}
            style={styles.image}
          />
        </TouchableOpacity>
      ) : null}
      {text ? (
        <View style={styles.headerText}>
          <Typo text={text} variant={'b1'} color={'#1E222B'} />
        </View>
      ) : null}
      {cartIcon ? (
        <TouchableOpacity style={styles.cartButton}>
          <Image
            source={require('../../assets/icons/bagBlack.png')}
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
    height: 60,
    width: '100%',
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F8F7FB',
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
