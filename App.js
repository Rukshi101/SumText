/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Camera, {Constants} from './src/components/camera';
import RNFS from 'react-native-fs';

import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-react-native';

const openCamera = (props) => {
  return (
    <View>
      <Text>Camera Goes here</Text>
    </View>
  );
};
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainText: 'FIRST',
      showCamera: false,
      recognizedText: null,
      isTfReady: false,
    };
  }

  async componentDidMount() {
    // wait for tf to be ready
    await tf.ready();
    this.setState({
      isTfReady: true,
    });
  }

  // Fires when we take a picture!
  onOCRCapture(recognizedText) {
    console.log('onCapture', recognizedText);
    this.setState({showCamera: false, recognizedText: recognizedText});
  }
  // Must make a dedicated function because when doing setState we must be within the class!
  onButtonPress = () => {
    this.setState({showCamera: !this.state.showCamera});
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <StatusBar barStyle="default" backgroundColor="green" />
        <View>
          <Text>Camera Goes here</Text>
        </View>
        <TouchableOpacity onPress={this.onButtonPress} title="Start Camera">
          <Text>Open Camera</Text>
        </TouchableOpacity>
        {this.state.showCamera && (
          <Camera
            cameraType={Constants.Type.front}
            flashMode={Constants.FlashMode.off}
            autoFocus={Constants.AutoFocus.on}
            whiteBalance={Constants.WhiteBalance.auto}
            ratio={'4:3'}
            quality={0.5}
            imageHeight={800}
            imageWidth={800}
            enabledOCR={true}
            onCapture={(data, recognizedText) =>
              this.onOCRCapture(recognizedText)
            }
            onClose={(_) => {
              this.setState({showCamera: false});
            }}
          />
        )}
      </View>
    );
  }
}
export default App;
