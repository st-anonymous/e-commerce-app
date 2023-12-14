import React from 'react';
import {StyleSheet, View} from 'react-native';
import Typo from '../components/micro/Typo';

const Splash = () => {
  return (
    <View style={styles.container}>
      <Typo text={'Plena Finance'} variant={'h1'} color={'#F9B023'} />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2A4BA0',
  },
});
