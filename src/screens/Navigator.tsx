import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './Splash';
import Home from './Home';
import Favorites from './Favorites';
import useInit from '../hooks/useInit';
import Categories from './Categories';
import ProductDisplay from './ProductDisplay';

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
        name={'Home'}
        component={Home}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={'Categories'}
        component={Categories}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={'Favorites'}
        component={Favorites}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={'ProductDisplay'}
        component={ProductDisplay}
      />
    </Stack.Navigator>
  );
};

export default Navigator;
