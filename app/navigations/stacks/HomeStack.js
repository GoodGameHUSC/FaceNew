import React from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../../screens/HomeScreen';
import TabBarIcon from '../../components/TabBarIcon';
import { Platform, View, Text } from 'react-native';
import { TABS } from '../../constants/Routes';
import CameraScreen from '../../screens/CameraScreen';
import PostDetail from '../../screens/PostDetail';
import SearchScreen from '../../screens/SearchScreen';


const config = {
  // title : 'Home'
  headerMode: 'none',
}
const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Search : SearchScreen,
    PostDetail : PostDetail,
    Camera : CameraScreen,
  },
  config
);

// HomeStack.navigationOptions = {
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       title ={'News'}
//       name={Platform.OS === 'ios'
//         ? 'ios-paper'
//         : 'md-paper'}
//     />
//   ),
//   headerStyle: {
//     backgroundColor: '#633689',
//   },
//   headerTintColor: '#FFFFFF',
//   title: 'News Face',
// };

HomeStack.path = TABS.HOME._;

export default HomeStack;