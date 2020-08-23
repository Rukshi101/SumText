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
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainText: 'FIRST',
      showCamera: false,
    };
  }
  // Must make a dedicated function because when doing setState we must be within the class!
  onButtonPress = () => {
    this.setState({showCamera: !this.state.showCamera});
  };

  render() {
    return (
      <View>
        {/* <Text>{this.state.mainText}</Text> */}
        <Button
          onClick={() => this.setstate({showCamera: !this.state.showCamera})}
          onPress={this.onButtonPress}
          title="BUTTON">
          BUTTON
        </Button>
        {this.state.showCamera && (
          <Camera
            cameraType={Constants.Type.front}
            flashMode={Constants.FlashMode.off}
            autoFocus={Constants.AutoFocus.on}
            whiteBalance={Constants.WhiteBalance.auto}
            ratio={'1:1'}
            quality={0.5}
            imageHeight={800}
            imageWidth={800}
            onCapture={(data) => this.savePhoto(data)}
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
