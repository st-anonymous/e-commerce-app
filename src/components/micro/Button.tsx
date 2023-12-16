/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {ButtonTypes} from '../../Types';
import Typo from './Typo';

const Button = (props: ButtonTypes) => {
  const {type, size, text, onClick} = props;
  return (
    <TouchableOpacity
      onPress={onClick}
      style={{
        ...styles.container,
        backgroundColor: type === 'primary' ? '#153075' : '#FFFFFF',
        borderColor: type === 'secondary' ? '#153075' : '#FFFFFF',
        borderWidth: 1,
        width: size === 'big' ? '90%' : '45%',
      }}>
      <Typo
        text={text}
        variant={'btn1'}
        color={type === 'primary' ? '#FFFFFF' : '#153075'}
      />
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
