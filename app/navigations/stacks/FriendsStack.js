import React from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../../screens/HomeScreen';
import TabBarIcon from '../../components/TabBarIcon';
import { Platform } from 'react-native';


const config = {}
const FriendsStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

FriendsStack.navigationOptions = {
  tabBarLabel: 'Friends',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      title = 'Friends'
      name={
        Platform.OS === 'ios'
          ? 'ios-people'
          : 'md-people'
      }
    />
  ),
};

FriendsStack.path = '';

export default FriendsStack;