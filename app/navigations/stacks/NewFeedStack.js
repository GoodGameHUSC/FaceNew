import React from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../../screens/HomeScreen';
import TabBarIcon from '../../components/TabBarIcon';
import { Platform } from 'react-native';
import SearchScreen from '../../screens/SearchScreen';


const config = {
  headerMode: 'none',
}
const NewFeedStack = createStackNavigator(
  {
    Video: SearchScreen,
  },
  config
);

NewFeedStack.navigationOptions = {
  tabBarLabel: 'Feeds',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      title='Search'
      name={
        Platform.OS === 'ios'
          ? 'ios-search'
          : 'md-search'
      }
    />
  ),
  headerStyle: {
    backgroundColor: '#633689',
  },
  headerTintColor: '#FFFFFF',
  title: 'TabExample',
};

NewFeedStack.path = '';

export default NewFeedStack;
