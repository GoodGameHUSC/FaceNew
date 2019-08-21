import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import { TABS } from '../constants/Routes';

//stack
import MainTabNavigator from './stacks/_MainTabNavigator';
import AuthStack from './stacks/AuthStack';
import AppLoadingStack from './stacks/AppLoadingStack';

export default createAppContainer(
  createSwitchNavigator({
    // TODO : add more stack here
    [TABS.MAIN]: MainTabNavigator,
    [TABS.AUTH._]: AuthStack,
    [TABS.APP_LOADING] : AppLoadingStack
  },
    {
      initialRouteName: TABS.APP_LOADING,
      swipeEnabled: true,
    })
);