import React from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../../screens/HomeScreen';
import TabBarIcon from '../../components/TabBarIcon';
import { Platform } from 'react-native';


const config = {}
const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Enjoger',
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
  headerStyle: {
    backgroundColor: '#633689',
  },
  headerTintColor: '#FFFFFF',
  title: 'TabExample',
};

HomeStack.path = '';

export default HomeStack;