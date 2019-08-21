import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  View, Text, StyleSheet, Platform, Image, KeyboardAvoidingView, Keyboard
  , TouchableWithoutFeedback
} from 'react-native';
import { Button, Overlay, Input, Divider } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import styled from 'styled-components'
import { TouchableOpacity } from 'react-native-gesture-handler';
import validator from 'validator';
import autoBind from 'react-autobind';
import { TABS } from '../../constants/Routes';
const Logo = styled.Image`
  padding : 10px
`

export default class SignUpScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      passwordViewAble: false,
      email: '',
      password: ''
    }
    autoBind(this)
  }
  togglePasswordViewAble = () => {
    this.setState((prevState, props) => ({
      passwordViewAble: !prevState.passwordViewAble
    }))
  }
  handleInput(text, key) {
    this.setState((prevState, props) => ({
      [key]: text
    }))
  }
  onLogin() {
    let { email, password } = this.state;
    email = email.trim();
    password = password.trim();
    if (!email || !password) return alert('Email or password must be filled')
    if (!validator.isEmail(email)) return alert('Invalid email address')

  }
  onSignUp(){
    this.props.navigation.navigate(TABS.AUTH.SIGNUP);
  }
  render() {

    const Form = (<View style={styles.form}>
      <View style={styles.groups}>
        <Input
          inputContainerStyle={styles.inputContainerStyle}
          placeholder='your_email@gmail.com'
          label={'Email'}
          labelStyle={styles.labelStyle}
          shake={true}
          inputStyle={styles.inputStyle}
          value={this.state.email}
          onChangeText={text => this.handleInput(text, 'email')}
        ></Input>
      </View>
      <View style={styles.groups}>
        <Input
          inputContainerStyle={styles.inputContainerStyle}
          placeholder='your password'
          label={'Password'}
          labelStyle={styles.labelStyle}
          shake={true}
          secureTextEntry={this.state.passwordViewAble ? false : true}
          inputStyle={styles.inputStyle}
          onChangeText={text => this.handleInput(text, 'password')}
          rightIcon={
            <Icon
              name={this.state.passwordViewAble ? 'eye-slash' : 'eye'}
              size={24}
              color='grey'
              onPress={this.togglePasswordViewAble}
            />
          }
        ></Input>
      </View>
      <View style={{
        ...styles.groups,
        padding: 0,
        justifyContent: "flex-end",
        flexDirection: "row"
      }}>
        <Button
          title="Forgot password ?"
          type="clear"
          titleStyle={{ color: "grey", fontSize: 12 }}
        />
      </View>
      <View style={{
        ...styles.groups,
        padding: 5,
        marginBottom: 5
      }}>
        <TouchableOpacity style={{ alignItems: "center", padding: 5 }} activeOpacity={.7}
          onPress={this.onLogin} >
          <Button
            buttonStyle={{
              borderRadius: Platform.OS === 'ios' ? 18 : 30,
              paddingHorizontal: 50,
              paddingVertical: 8,
              width: undefined,
              elevation: 3,
            }}
            title="LOGIN"
            linearGradientProps={{
              colors: ['#6079ec', '#4041ef'],
              start: { x: 0, y: 0.5 },
              end: { x: 1, y: 0.5 },
            }}
            titleStyle={{ color: 'white', fontSize: 15, fontWeight: "bold" }}
            loading={false}
          />
        </TouchableOpacity>
      </View>
      <View>
        <View style={{ padding: 10, flexDirection: "row", justifyContent: "center" }}>
          <Text style={{ backgroundColor: 'grey', height: 1, width: 100 }}></Text>
          <Text style={{ textAlign: "center", color: "grey", marginTop: -8, marginHorizontal: 5 }}>Or with</Text>
          <Text style={{ backgroundColor: 'grey', height: 1, width: 100 }}></Text>
        </View>
        <View style={{ padding: 10, justifyContent: "space-around", flexDirection: "row", width: '100%' }}>
          <TouchableOpacity activeOpacity={.7} style={{ alignItems: "center", padding: 5 }}>
            <View style={{ width: 100, padding: 10, justifyContent: "space-around", borderRadius: 15, flexDirection: "row", backgroundColor: '#e94335' }}>
              <Icon
                name='google' style={{ color: 'white' }} />
              <Text style={{ marginVertical: -2, marginHorizontal: 3, color: 'white' }}>Google</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={.7} style={{ alignItems: "center", padding: 5 }}>
            <View style={{ width: 100, padding: 10, justifyContent: "space-around", borderRadius: 15, flexDirection: "row", backgroundColor: '#385898' }}>
              <Text style={{ marginVertical: -2, marginHorizontal: 3, color: 'white' }}>Facebook</Text>
              <Icon
                name='facebook' style={{ color: 'white' }} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ marginTop: 20 }}>
        <TouchableWithoutFeedback style={{}} onPress={this.onSignUp}>
          <Text style={{ textAlign: "center", fontSize: 13, fontWeight: "bold", color: "grey" }}>Already have an account ?
          <Text style={{ color: '#6079ec' }}> Sign up here</Text></Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
    )


    return (
      <SafeAreaView style={styles.container} >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView style={styles.main_view} behavior="height" enabled>
            <Image style={styles.logo} source={require('../../assets/bg/2.png')} resizeMode="contain">
            </Image>
            <Text style={styles.title}>Welcome to Enjoger</Text>
            <Text style={styles.title2}>Enjoy together - Learning together</Text>
            {Form}
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </SafeAreaView >
    )
  }

}
const bg_color = 'blue'
const styles = StyleSheet.create({
  container: {
    // paddingTop : Platform.OS === 'ios' ? 0 : 28,
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: 'white'
  },
  main_view: {
    width: '100%',
    height: '100%',
  },
  footer_circel: {
    width: 100,
    height: 100,
    borderRadius: 500,
    backgroundColor: 'red'
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 28,
    color: '#323742'
  },
  title2: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 14,
    color: '#a0a0a0'
  },
  logo: {
    flex: 1,
    alignSelf: 'stretch',
    height: undefined,
    width: undefined,
    marginTop: Platform.OS === 'ios' ? 0 : 28,
    padding: 20
  },
  form: {
    marginTop: 20,
    padding: 30,
    height: '60%',
  },
  groups: {
    backgroundColor: 'white',
    marginTop: 10
  },
  groups_title: {
    paddingLeft: 10
  },
  inputContainerStyle: {
    borderColor: '#f1f1f1',
    padding: 0,
  },
  inputStyle: {
    color: 'grey',
    fontSize: 14,
    paddingHorizontal: 5
  },
  labelStyle: {
    textAlign: "left",
    marginBottom: 0,
    fontSize: 14,
    paddingLeft: 5
  },
  text: {
    color: 'black'
  }
})
