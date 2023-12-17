import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './Splash';
import ProductDisplay from './ProductDisplay';
import Checkout from './Checkout';

const GeneralTab = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName={'Splash'}>
      <Stack.Screen
        options={{headerShown: false}}
        name={'Splash'}
        component={Splash}
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

export default GeneralTab;
