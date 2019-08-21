import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import TabBarIcon from '../../components/TabBarIcon';
import LinksScreen from '../../screens/LinksScreen';
import SettingsScreen from '../../screens/SettingsScreen';
// stack
import HomeStack from './HomeStack';
import FriendsStack from './FriendsStack';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});


const LinksStack = createStackNavigator(
  {
    Links: LinksScreen,
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

LinksStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

SettingsStack.path = '';

const tabNavigator = createMaterialTopTabNavigator({
  HomeStack,
  FriendsStack,
  LinksStack,
  SettingsStack,
},{
  tabBarPosition : 'bottom',
  tabBarOptions: {
    labelStyle: {
      fontSize: 12,
      color : 'white'
    },
    tabStyle: {
      // width: '25%',
    },
    style: {
    },
  }
});

tabNavigator.path = '';

export default tabNavigator;
