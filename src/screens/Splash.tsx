import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import Typo from '../components/micro/Typo';
// import {useNavigation} from '@react-navigation/native';

const Splash = () => {
  // const navigation = useNavigation();

  useEffect(() => {
    return () => {};
  }, []);

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
