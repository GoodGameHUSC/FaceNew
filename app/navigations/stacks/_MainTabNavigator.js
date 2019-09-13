import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import Themes from '../../constants/Themes';

import HomeStack from './HomeStack';
import NewFeedStack from './NewFeedStack';
import ProfileStack from './ProfileStack';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';


const tab_config = {
  headerMode: 'none',
  initialRouteName : 'HomeStack',
  // tabBarOptions: {
  //   iconStyle: {
  //     width : '100%',
  //     height : '100%',
  //     fontSize: 11,
  //     fontWeight : 'bold',
  //   },
    
  //   tabStyle: {
  //     // width: '25%',
  //     padding : 0,
  //     height : 50
  //   },
  //   showLabel : false,
  //   indicatorStyle: {
  //     height: 0
  //   },
  //   style: {
  //     // backgroundColor: Themes.tabBarBgColor,
  //     backgroundColor : 'red',
  //     borderTopColor  : Themes.tabBarBorderColor
  //   },
  //   showIcon : true,
  //   activeTintColor : Themes.tabBarActiveTintColor,
  //   inactiveTintColor :  Themes.tabBarInAciveTintColor,
  //   // animationEnabled : false,
  //   backBehavior : "order",
  //   optimizationsEnabled : true,
  //   swipeEnabled : false,
  //   lazy : true
  // }
}


const tabNavigator = createStackNavigator({
  // FriendsStack,
  // EnjoyStack,
  // NewFeedStack,
  HomeStack,
  // ProfileStack,
}, tab_config);


tabNavigator.path = '';

export default tabNavigator;

