import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../Splash';
import ProductDisplay from '../ProductDisplay';
import Checkout from '../Checkout';
import Tabs from './Tabs';
import useInit from '../../hooks/useInit';

const Navigator = () => {
  const Stack = createNativeStackNavigator();
  useInit();

  return (
    <Stack.Navigator initialRouteName={'Splash'}>
      <Stack.Screen
        options={{headerShown: false}}
        name={'Splash'}
        component={Splash}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={'Main'}
        component={Tabs}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={'ProductDisplay'}
        component={ProductDisplay}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={'Checkout'}
        component={Checkout}
      />
    </Stack.Navigator>
  );
};

export default Navigator;
