import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import { View, Text } from 'react-native';
import Themes from '../constants/Themes';

const Icon = (props) => <Ionicons
  name={props.name}
  size={23}
  style={{ marginBottom: -3, width: 20 }}
  color={props.focused ?
    (props.color ? props.color : Themes.tabBarActiveTintColor)
    : Themes.tabBarInAciveTintColor}
/>
export default function TabBarIcon(props) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
      <Icon
        focused={props.focused}
        name={props.name}
        color={props.color}
      />
      {
        props.focused && props.title ? <Text style={{ color: props.color ? props.color : Themes.tabBarActiveTintColor }}>{props.title}</Text> : null
      }
    </View>
  );
}

