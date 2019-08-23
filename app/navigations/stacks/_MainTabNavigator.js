import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import TabBarIcon from '../../components/TabBarIcon';
// stack


import HomeStack from './HomeStack';
import FriendsStack from './FriendsStack';
import EnjoyStack from './EnjoyStack';
import InvitationStack from './InvitationStack';
import ProfileStack from './ProfileStack';
import Themes from '../../constants/Themes';
import NewFeedStack from './NewFeedStack';
import { TABS } from '../../constants/Routes';


const tabconfig = {
  tabBarPosition: 'bottom',
  initialRouteName : 'HomeStack',
  tabBarOptions: {
    iconStyle: {
      width : '100%',
      height : '100%',
      fontSize: 11,
      fontWeight : 'bold',
    },
    
    tabStyle: {
      // width: '25%',
      padding : 0,
      height : 50
    },
    showLabel : false,
    indicatorStyle: {
      height: 0
    },
    style: {
      backgroundColor: Themes.tabBarBgColor
    },
    showIcon : true,
    activeTintColor : Themes.tabBarActiveTintColor,
    inactiveTintColor :  Themes.tabBarInAciveTintColor,
    // animationEnabled : false,
    backBehavior : "order",
    optimizationsEnabled : true,
    swipeEnabled : false,
    lazy : true
  }
}


const tabNavigator = createBottomTabNavigator({
  FriendsStack,
  EnjoyStack,
  HomeStack,
  NewFeedStack,
  ProfileStack,
}, tabconfig);


tabNavigator.path = '';

export default tabNavigator;


// const config = Platform.select({
//   web: { headerMode: 'screen' },
//   default: {},
// });


// const LinksStack = createStackNavigator(
//   {
//     Links: LinksScreen,
//   },
//   config
// );

// LinksStack.navigationOptions = {
//   tabBarLabel: 'Links',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
//   ),
// };

// LinksStack.path = '';

// const SettingsStack = createStackNavigator(
//   {
//     Settings: SettingsScreen,
//   },
//   config
// );

// SettingsStack.navigationOptions = {
//   tabBarLabel: 'Settings',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
//   ),
// };

// SettingsStack.path = '';
