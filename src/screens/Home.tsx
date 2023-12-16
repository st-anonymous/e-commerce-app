/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Tabs from '../components/macro/Tabs';
import Typo from '../components/micro/Typo';
import Header from '../components/macro/Header';
import SearchBox from '../components/micro/SearchBox';
import ItemsContainer from '../components/macro/ItemsContainer';
import {useRecoilState} from 'recoil';
import RenderingItems from '../data/RenderingItems';

const Home = () => {
  const [renderingItems] = useRecoilState(RenderingItems);
  return (
    <>
      <Header
        text={'Hey, Tony'}
        textVariant={'h3'}
        backButton={false}
        cartIcon={true}
        isMainScreen={true}
      />
      <View style={styles.container}>
        <SearchBox />
        <View style={styles.headingContainer}>
          <Typo
            text={'Recommended'}
            variant={'h1'}
            styleProps={{color: '#1E222B', fontWeight: '400'}}
          />
        </View>
        <ItemsContainer items={renderingItems} />
      </View>
      <Tabs />
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    height: '90%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  headingContainer: {
    width: '100%',
    padding: 10,
    alignItems: 'flex-start',
  },
});
