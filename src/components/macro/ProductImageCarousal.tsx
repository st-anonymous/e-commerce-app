/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import useFavorite from '../../hooks/useFavorite';

const ProductImageCarousal = (props: {
  id: number;
  images: Array<string>;
  isFavorite: boolean;
}) => {
  const {id, images, isFavorite} = props;
  const [index, setIndex] = useState(0);
  const [isAddedToFavorites, setIsAddedToFavorites] = useState(isFavorite);
  const width = Dimensions.get('window').width;

  const {HandleFavoriteToggle} = useFavorite();

  const RenderImage = useCallback((item: string) => {
    return (
      <Image
        source={{
          uri: item,
        }}
        style={styles.image}
      />
    );
  }, []);

  return (
    <View style={styles.container}>
      <Carousel
        loop
        width={width}
        height={width / 2}
        autoPlay={images.length > 1 ? true : false}
        autoPlayInterval={1500}
        data={images}
        scrollAnimationDuration={1500}
        onProgressChange={(_, i) => {
          setIndex(Math.round(i));
        }}
        renderItem={({item}) => RenderImage(item)}
      />
      <TouchableOpacity
        onPress={() => {
          HandleFavoriteToggle(id);
          setIsAddedToFavorites(prev => !prev);
        }}
        style={styles.favoriteToggleButton}>
        <Image
          source={
            isAddedToFavorites
              ? require('../../assets/icons/favorite.png')
              : require('../../assets/icons/non_favorite.png')
          }
          style={styles.favoriteImage}
        />
      </TouchableOpacity>
      <View style={styles.imageCounterContainer}>
        {images.map(image => {
          return (
            <View
              key={image}
              style={{
                ...styles.imageCounter,
                backgroundColor:
                  images[index] === image ? '#F9B023' : '#E4E4E4',
              }}
            />
          );
        })}
      </View>
    </View>
  );
};

export default ProductImageCarousal;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {width: '100%', resizeMode: 'contain', height: '100%'},
  imageCounterContainer: {
    position: 'absolute',
    bottom: 10,
    left: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  imageCounter: {
    height: 5,
    width: 15,
    borderRadius: 50,
    margin: 2.5,
  },
  favoriteToggleButton: {
    position: 'absolute',
    top: 10,
    right: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 10,
  },
  favoriteImage: {
    height: 20,
    aspectRatio: 1,
    resizeMode: 'center',
  },
});
