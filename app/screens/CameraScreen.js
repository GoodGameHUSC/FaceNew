import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';

export default class CameraScreen extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.front,
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    if(status != 'granted') alert("Require camera permission")
    this.setState({ hasCameraPermission: status === 'granted' });
    setTimeout(async () => {
      if (this.camera) {
        let photo = await this.camera.takePictureAsync({quality : 0});
        this.props.onTakeFaceSuccess(photo)
      } else {
        this.props._onLostFace('Oops')
        alert("Unable to use camera")
      }
    }, 2000)
  }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera
            style={{ width : 200, height :200, borderRadius: 10 }}
            type={this.state.type}
            ref={ref => {
              this.camera = ref;
            }}
            // pictureSize = {}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
              }}>

            </View>
          </Camera>
        </View>
      );
    }
  }
}