import React from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../../screens/HomeScreen';
import TabBarIcon from '../../components/TabBarIcon';
import { Platform } from 'react-native';


const config = {}
const ProfileStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

ProfileStack.navigationOptions = {
  tabBarLabel: 'Setting',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      title = {'Profile'}
      name={
        Platform.OS === 'ios'
          ? `ios-settings`
          : 'md-settings'
      }
    />
  ),
  headerStyle: {
    backgroundColor: '#633689',
  },
  headerTintColor: '#FFFFFF',
  title: 'TabExample',
};

ProfileStack.path = '';

export default ProfileStack;