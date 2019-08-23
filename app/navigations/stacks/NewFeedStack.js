import React from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../../screens/HomeScreen';
import TabBarIcon from '../../components/TabBarIcon';
import { Platform } from 'react-native';


const config = {}
const NewFeedStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

NewFeedStack.navigationOptions = {
  tabBarLabel: 'Feeds',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      title = 'Feeds'
      name={
        Platform.OS === 'ios'
          ? 'ios-images'
          : 'md-images'
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
