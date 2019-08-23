import React from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../../screens/HomeScreen';
import TabBarIcon from '../../components/TabBarIcon';
import { Platform } from 'react-native';


const config = {}
const EnjoyStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

EnjoyStack.navigationOptions = {
  tabBarLabel: 'Enjoy',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      title = {'Enjoger'}
      name={
        Platform.OS === 'ios'
          ? `ios-star`
          : `md-star`
      }
    />
  ),
};

EnjoyStack.path = '';

export default EnjoyStack;