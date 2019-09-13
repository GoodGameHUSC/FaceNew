import React from "react";
import { StyleSheet, StatusBar } from "react-native";
import Themes from "../constants/Themes";
import { SafeAreaView } from "react-navigation";

export default class BackgroundScreen extends React.Component {
  render() {
    const propsStyle = this.props.style || {};
    return (
      <SafeAreaView style={{ ...styles.background, ...propsStyle }}>

        {this.props.children}
      </SafeAreaView>
    );
  }
  componentDidMount() {
    StatusBar.setBarStyle('dark-content', true)
    StatusBar.setBackgroundColor("#0996AE")
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: Themes.screenBackgroundColor,
    marginTop: Platform.OS === 'ios' ? 0 : 30
  }
});
