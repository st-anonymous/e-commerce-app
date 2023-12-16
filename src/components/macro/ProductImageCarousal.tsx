/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useState} from 'react';
import {Dimensions, Image, StyleSheet, View} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const ProductImageCarousal = (props: {images: Array<string>}) => {
  const {images} = props;
  const [index, setIndex] = useState(0);
  const width = Dimensions.get('window').width;

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
});
