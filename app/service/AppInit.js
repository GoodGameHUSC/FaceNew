import {
  AsyncStorage
} from 'react-native';
import * as firebase from 'firebase';

export default class AppInit {
  static loadingAsyncData = async () => {
    try {
      const userToken = await AsyncStorage.getItem('userToken');
      return userToken
    } catch (error) {
      console.log(error)
      Promise.reject(new Error('Loading fail'))
    }
  }
}

