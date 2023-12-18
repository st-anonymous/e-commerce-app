/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import {useRecoilValue, useSetRecoilState} from 'recoil';
import AvailableItems from '../../data/AvailableItems';
import RenderingItems from '../../data/RenderingItems';

const SearchBox = () => {
  const [searchText, setSearchText] = useState<string | null>(null);
  const availableItems = useRecoilValue(AvailableItems);
  const setRenderingItems = useSetRecoilState(RenderingItems);

  useEffect(() => {
    if (searchText !== null) {
      const timer = setTimeout(() => {
        if (searchText === '') {
          setRenderingItems(availableItems);
        } else {
          setRenderingItems(
            availableItems.filter(item => {
              return item.description
                .toLowerCase()
                .includes(searchText.toLowerCase());
            }),
          );
        }
      }, 1000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [searchText]);

  useEffect(() => {
    if (!searchText) {
      setRenderingItems(availableItems);
    } else {
      setRenderingItems(
        availableItems.filter(item => {
          return item.description
            .toLowerCase()
            .includes(searchText.toLowerCase());
        }),
      );
    }
  }, [availableItems]);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={'Search Products or Store'}
        placeholderTextColor={'#AAAAAA'}
        style={styles.textInput}
        value={searchText as string}
        onChangeText={setSearchText}
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
