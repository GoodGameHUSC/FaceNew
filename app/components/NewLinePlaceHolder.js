import React from 'react';
import { View } from 'react-native';
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade,
  ShineOverlay
} from "rn-placeholder";


export default NewLinePlaceHolder = () => {
  return <View style={{ width: '100%', height: 300 }} >
    <Placeholder
      Left={PlaceholderMedia}
      Animation={ShineOverlay}
    >
      <PlaceholderLine width={200} /> 
      {/* <PlaceholderLine /> */}
      <PlaceholderLine width={30} />
    </Placeholder>
    <Placeholder
      Left={PlaceholderMedia}
      Animation={ShineOverlay}
    >
      <PlaceholderLine width={200} />
      {/* <PlaceholderLine /> */}
      <PlaceholderLine width={30} />
    </Placeholder>
    <Placeholder
      Left={PlaceholderMedia}
      Animation={ShineOverlay}
    >
      <PlaceholderLine width={200} />
      {/* <PlaceholderLine /> */}
      <PlaceholderLine width={30} />
    </Placeholder>

    <Placeholder
      Left={PlaceholderMedia}
      Animation={ShineOverlay}
    >
      <PlaceholderLine width={200} />
      {/* <PlaceholderLine /> */}
      <PlaceholderLine width={30} />
    </Placeholder>
    <Placeholder
      Left={PlaceholderMedia}
      Animation={ShineOverlay}
    >
      <PlaceholderLine width={200} />
      {/* <PlaceholderLine /> */}
      <PlaceholderLine width={30} />
    </Placeholder>
  </View>
}