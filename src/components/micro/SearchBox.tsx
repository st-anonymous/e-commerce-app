import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';

const SearchBox = () => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={'Search Products or Store'}
        placeholderTextColor={'#AAAAAA'}
        style={styles.textInput}
      />
    </View>
  );
};

export default SearchBox;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    backgroundColor: '#2A4BA0',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  textInput: {
    width: '90%',
    height: 60,
    color: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 28,
    backgroundColor: '#153075',
  },
});
