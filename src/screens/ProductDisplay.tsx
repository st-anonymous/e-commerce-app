import React from 'react';
import {StyleSheet, View} from 'react-native';
import Header from '../components/macro/Header';
import {Rating} from 'react-native-elements';
import Typo from '../components/micro/Typo';

const ProductDisplay = () => {
  return (
    <View style={styles.container}>
      <Header cartIcon={true} />
      <View>
        <Typo text={'Header'} variant={'h1'} />
      </View>
      <Rating readonly />
      {/* <View>
        <View></View>
      </View> */}
    </View>
  );
};

export default ProductDisplay;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    height: '100%',
  },
});
