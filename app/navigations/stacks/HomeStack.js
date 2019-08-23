import React from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../../screens/HomeScreen';
import TabBarIcon from '../../components/TabBarIcon';
import { Platform, View, Text } from 'react-native';
import { TABS } from '../../constants/Routes';


const config = {}
const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  // tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      title ={'Home'}
      name={Platform.OS === 'ios'
        ? 'ios-home'
        : 'md-home'}
    />
  ),
  headerStyle: {
    backgroundColor: '#633689',
  },
  headerTintColor: '#FFFFFF',
  title: 'TabExample',
};

HomeStack.path = TABS.HOME._;

export default HomeStack;