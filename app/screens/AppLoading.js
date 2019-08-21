import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View,
  Image
} from 'react-native';
import { TABS } from '../constants/Routes';
import AppInit from '../service/AppInit';

class AppLoading extends React.Component {
  constructor() {
    super();
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AppInit.loadingAsyncData()
    this.props.navigation.navigate(userToken ? TABS.MAIN : TABS.AUTH._);
  };

  // Render any loading content that you like here
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.main}>
          <Image style={styles.image} source={require('../assets/logo/Enjoger-logo-white.png')} resizeMode="contain"
          ></Image>
          <ActivityIndicator />

          <StatusBar barStyle="default" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink'
  },
  main: {
    height: '60%',
    width: '100%',
    alignItems: 'center'
  },
  image: {
    flex: 1,
    alignSelf: 'stretch',
    height: undefined,
    width: undefined
  }
});

export default AppLoading;