import React from 'react';
import {Text, TextStyle} from 'react-native';

type TypoType = {
  text: string;
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'b1' | 'b2' | 'l' | 'btn1' | 'btn2';
  styleProps?: TextStyle;
  color?: TextStyle['color'];
};
const Typo = (props: TypoType) => {
  const {text, variant, styleProps, color = '#8891A5'} = props;
  let styles: TextStyle = {fontFamily: 'Manrope', color};
  let variantStyle: TextStyle = {};
  switch (variant) {
    case 'h1':
      variantStyle = {fontSize: 30, lineHeight: 33};
      break;
    case 'h2':
      variantStyle = {fontSize: 26, lineHeight: 28};
      break;
    case 'h3':
      variantStyle = {fontSize: 20, lineHeight: 22};
      break;
    case 'h4':
      variantStyle = {fontSize: 18, lineHeight: 20};
      break;
    case 'b1':
      variantStyle = {fontSize: 16, lineHeight: 18};
      break;
    case 'b1':
      variantStyle = {fontSize: 14, lineHeight: 16};
      break;
    case 'l':
      variantStyle = {fontSize: 12, lineHeight: 14};
      break;
    case 'btn1':
      variantStyle = {fontSize: 14, lineHeight: 16};
      break;
    case 'btn2':
      variantStyle = {fontSize: 12, lineHeight: 14};
      break;
  }
  styles = {...styles, ...variantStyle};
  return <Text style={{...styles, ...styleProps}}>{text}</Text>;
};

export default Typo;
