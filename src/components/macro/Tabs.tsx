import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import Typo from '../micro/Typo';

const Tabs = () => {
  const screenName = useRoute().name;
  const navigation = useNavigation();

  const HandleHomeClick = () => {
    navigation.navigate('Home' as never);
  };

  const HandleCategoriesClick = () => {
    navigation.navigate('Categories' as never);
  };

  const HandleFavoritesClick = () => {
    navigation.navigate('Favorites' as never);
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonWholeContainer}>
        {screenName === 'Home' ? (
          <View style={styles.highlightedButtonOutside}>
            <View style={styles.highlightedButton}>
              <Image
                source={require('../../assets/icons/highlightedHome.png')}
                style={styles.buttonImage}
              />
            </View>
          </View>
        ) : (
          <TouchableOpacity
            onPress={HandleHomeClick}
            style={styles.buttonContainer}>
            <Image
              source={require('../../assets/icons/home.png')}
              style={styles.buttonImage}
            />
            <Typo text={'Home'} variant={'btn2'} />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.buttonWholeContainer}>
        {screenName === 'Categories' ? (
          <View style={styles.highlightedButtonOutside}>
            <View style={styles.highlightedButton}>
              <Image
                source={require('../../assets/icons/highlightedCategories.png')}
                style={styles.buttonImage}
              />
            </View>
          </View>
        ) : (
          <TouchableOpacity
            onPress={HandleCategoriesClick}
            style={styles.buttonContainer}>
            <Image
              source={require('../../assets/icons/categories.png')}
              style={styles.buttonImage}
            />
            <Typo text={'Categories'} variant={'btn2'} />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.buttonWholeContainer}>
        {screenName === 'Favorites' ? (
          <View style={styles.highlightedButtonOutside}>
            <View style={styles.highlightedButton}>
              <Image
                source={require('../../assets/icons/favorites.png')}
                style={styles.buttonImage}
              />
            </View>
          </View>
        ) : (
          <TouchableOpacity
            onPress={HandleFavoritesClick}
            style={styles.buttonContainer}>
            <Image
              source={require('../../assets/icons/favorites.png')}
              style={styles.buttonImage}
            />
            <Typo text={'Favorites'} variant={'btn2'} />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.buttonWholeContainer}>
        {screenName === 'More' ? (
          <View style={styles.highlightedButtonOutside}>
            <View style={styles.highlightedButton}>
              <Image
                source={require('../../assets/icons/more_vertical.png')}
                style={styles.buttonImage}
              />
            </View>
          </View>
        ) : (
          <TouchableOpacity style={styles.buttonContainer}>
            <Image
              source={require('../../assets/icons/more_vertical.png')}
              style={styles.buttonImage}
            />
            <Typo text={'More'} variant={'btn2'} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default React.memo(Tabs);

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 80,
    backgroundColor: '#F8F7FB',
    borderRadius: 30,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
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
    backgroundColor: '#F8F9FB',
    top: -70,
  },
  highlightedButton: {
    padding: 20,
    borderRadius: 30,
    backgroundColor: '#1E222B',
    elevation: 10,
  },
});
