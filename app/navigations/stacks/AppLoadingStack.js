import React from 'react';
import { createStackNavigator } from 'react-navigation';
import AppLoading from '../../screens/AppLoading';


const config = {
  headerMode: 'none',
}
const AppLoadingStack = createStackNavigator(
  {
    Home: AppLoading,
  },
  config
);

AppLoadingStack.path = '';

export default AppLoadingStack;