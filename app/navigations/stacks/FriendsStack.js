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
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

FriendsStack.path = '';

export default FriendsStack;