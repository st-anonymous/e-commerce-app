import React from 'react';
import {StyleSheet, View} from 'react-native';
import Typo from '../components/micro/Typo';

const Categories = () => {
  return (
    <>
      <View style={styles.container}>
        <Typo text={'Categories coming soon'} variant={'h1'} />
      </View>
    </>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
});
