/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet} from 'react-native';
import Home from '../Home';
import Favorites from '../Favorites';
import Categories from '../Categories';
import TabMenu from '../../components/micro/TabMenu';

const Tabs = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {...styles.tabContainer},
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <TabMenu screen={'Home'} focused={focused} />
          ),
        }}
        name={'Home'}
        component={Home}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <TabMenu screen={'Categories'} focused={focused} />
          ),
        }}
        name={'Categories'}
        component={Categories}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <TabMenu screen={'Favorites'} focused={focused} />
          ),
        }}
        name={'Favorites'}
        component={Favorites}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  tabContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 70,
    backgroundColor: '#F8F7FB',
    borderRadius: 30,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
});
