import { createStackNavigator } from 'react-navigation';
import { TABS } from '../../constants/Routes';

import LoginScreen from '../../screens/Auth/LoginScreen';
import SignUpScreen from '../../screens/Auth/SignUpScreen';

export default stack = createStackNavigator({
  [TABS.AUTH.LOGIN]: LoginScreen,
  [TABS.AUTH.SIGNUP] : SignUpScreen
},
  {
    headerMode: 'none',
  })
