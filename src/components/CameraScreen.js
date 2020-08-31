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

import Camera, {Constants} from '../components/camera';
import RNFS from 'react-native-fs';

import HomeScreen from '../components/HomeScreen';
import Helper from '../lib/helper';
import PreviewScreen from '../components/PreviewScreen';

class CameraScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCamera: false,
      recognizedText: null,
    };
  }
  // Must make a dedicated function because when doing setState we must be within the class!

  onOCRCapture(recognizedText) {
    console.log('onCapture - Final Text captured: ', recognizedText);
    this.setState({
      showCamera: false,
      showWordList: Helper.isNotNullAndUndefined(recognizedText),
      recognizedText: recognizedText,
    });
  }

  onCameraStart = () => {
    this.setState({showCamera: !this.state.showCamera});
  };

  retakePicture = () => {
    this.setState({showWordList: false});
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
          <Text>Let's Summarize some Text</Text>
        </View>
        <TouchableOpacity onPress={this.onCameraStart} title="Start Camera">
          <Text>Open Camera</Text>
        </TouchableOpacity>
        <View style={{marginTop: 20}}>
          <Text>If no text is found you will return to this page!</Text>
        </View>
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
            navigation={this.props.navigation}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'white',
  },
});

export default CameraScreen;
