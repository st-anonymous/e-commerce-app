import React from 'react';
import {StyleSheet, View} from 'react-native';
import TabMenu from '../micro/TabMenu';

const Tabs = () => {
  return (
    <View style={styles.container}>
      <TabMenu screen={'Home'} />
      <TabMenu screen={'Categories'} />
      <TabMenu screen={'Favorites'} />
      <TabMenu screen={'More'} />
    </View>
  );
};

console.log("it's re rendering");

export default Tabs;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 70,
    backgroundColor: '#F8F7FB',
    borderRadius: 30,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
});
