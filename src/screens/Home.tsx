import React from 'react';
import {StyleSheet, View} from 'react-native';
import Tabs from '../components/macro/Tabs';
import Typo from '../components/micro/Typo';

const Home = () => {
  return (
    <>
      <View style={styles.container}>
        <Typo text={'Home'} variant={'h1'} />
      </View>
      <Tabs />
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    height: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F7FB',
  },
});
