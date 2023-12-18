import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Typo from './Typo';
import {TabMenuType} from '../../Types';

const TabMenu = (props: TabMenuType) => {
  const {screen, focused} = props;

  let image = require('../../assets/icons/more_vertical.png');
  switch (screen) {
    case 'Home':
      image = focused
        ? require('../../assets/icons/highlightedHome.png')
        : require('../../assets/icons/home.png');
      break;
    case 'Categories':
      image = focused
        ? require('../../assets/icons/highlightedCategories.png')
        : require('../../assets/icons/categories.png');
      break;
    case 'Favorites':
      image = focused
        ? require('../../assets/icons/favorites.png')
        : require('../../assets/icons/favorites.png');
      break;
  }

  return (
    <View style={styles.buttonWholeContainer}>
      {focused ? (
        <View style={styles.highlightedButtonOutside}>
          <View style={styles.highlightedButton}>
            <Image source={image} style={styles.buttonImage} />
          </View>
        </View>
      ) : (
        <View style={styles.buttonContainer}>
          <Image source={image} style={styles.buttonImage} />
          <Typo text={screen} variant={'btn2'} />
        </View>
      )}
    </View>
  );
};

export default React.memo(TabMenu);

const styles = StyleSheet.create({
  buttonWholeContainer: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonImage: {
    height: 20,
    width: 20,
  },
  highlightedButtonOutside: {
    position: 'absolute',
    padding: 5,
    borderRadius: 35,
    top: -65,
  },
  highlightedButton: {
    padding: 20,
    borderRadius: 30,
    backgroundColor: '#1E222B',
    elevation: 10,
  },
});
