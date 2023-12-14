import React from 'react';
import {StyleSheet, View} from 'react-native';
import Tabs from '../components/macro/Tabs';
import Typo from '../components/micro/Typo';
import Header from '../components/macro/Header';

const Favorites = () => {
  return (
    <>
      <Header text={'favorites'} backButton={true} cartIcon={true} />
      <View style={styles.container}>
        <Typo text={'Favorites'} variant={'h1'} />
      </View>
      <Tabs />
    </>
  );
};

export default Favorites;

const styles = StyleSheet.create({
  container: {
    height: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F7FB',
  },
});
