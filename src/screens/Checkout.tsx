/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import Header from '../components/macro/Header';
import CheckoutItemCard from '../components/macro/CheckoutItemCard';
import useCart from '../hooks/useCart';
import {ScrollView, StyleSheet, View} from 'react-native';
import Typo from '../components/micro/Typo';
import Button from '../components/micro/Button';
import {useNavigation} from '@react-navigation/native';

const Checkout = () => {
  const {cartItems, HandleAddToCart, HandleRemoveFromCart, ClearCart} =
    useCart();

  const subtotal = cartItems.reduce((total, cartItem) => {
    return (
      total +
      cartItem.price *
        (1 - cartItem.discountPercentage / 100) *
        cartItem.itemCount
    );
  }, 0);
  const totalItems = cartItems.reduce(
    (total, cartItem) => total + cartItem.itemCount,
    0,
  );
  const delivery = subtotal ? 2 : 0;
  const total = subtotal + delivery;

  const navigation = useNavigation();

  const HandleProceedToCheckout = () => {
    ClearCart();
    navigation.navigate('Home' as never);
  };

  return (
    <View style={styles.mainContainer}>
      <Header text={`Shopping Cart (${totalItems})`} />
      <ScrollView style={styles.checkoutItems}>
        {cartItems.map(cartItem => {
          return (
            <CheckoutItemCard
              key={cartItem.id}
              {...cartItem}
              HandleAddToCart={HandleAddToCart}
              HandleRemoveFromCart={HandleRemoveFromCart}
            />
          );
        })}
      </ScrollView>
      <View style={{...styles.checkoutDetails, height: total ? '30%' : '20%'}}>
        <View style={styles.checkoutValues}>
          <Typo text={'Subtotal'} variant={'b1'} />
          <Typo
            text={subtotal.toFixed(2).toString()}
            variant={'b2'}
            color={'#1E222B'}
          />
        </View>
        <View style={styles.checkoutValues}>
          <Typo text={'Delivery'} variant={'b1'} />
          <Typo text={delivery.toString()} variant={'b2'} color={'#1E222B'} />
        </View>
        <View style={styles.checkoutValues}>
          <Typo text={'Total'} variant={'b1'} />
          <Typo
            text={total.toFixed(2).toString()}
            variant={'b2'}
            color={'#1E222B'}
          />
        </View>
        {total ? (
          <View style={styles.checkoutButton}>
            <Button
              type={'primary'}
              size={'big'}
              text={'Proceed To Checkout'}
              onClick={HandleProceedToCheckout}
            />
          </View>
        ) : null}
      </View>
    </View>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#FFFFFF',
    height: '100%',
  },
  checkoutItems: {
    height: '70%',
  },
  checkoutDetails: {
    width: '95%',
    alignSelf: 'center',
    elevation: 5,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: '#F8F9FB',
    alignItems: 'center',
  },
  checkoutValues: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
  },
  checkoutButton: {
    width: '100%',
    paddingTop: 30,
    alignItems: 'center',
  },
});
