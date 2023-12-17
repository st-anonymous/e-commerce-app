import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import Favorites from './Favorites';
import useInit from '../hooks/useInit';
import Categories from './Categories';
import GeneralTab from './GeneralTab';

const Navigator = () => {
  const Tab = createBottomTabNavigator();
  useInit();

  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{headerShown: false}}
        name={'Home'}
        component={Home}
      />
      <Tab.Screen
        options={{headerShown: false}}
        name={'Categories'}
        component={Categories}
      />
      <Tab.Screen
        options={{headerShown: false}}
        name={'Favorites'}
        component={Favorites}
      />
      <Tab.Screen
        options={{headerShown: false}}
        name={'More'}
        component={GeneralTab}
      />
    </Tab.Navigator>
  );
};

export default Navigator;
