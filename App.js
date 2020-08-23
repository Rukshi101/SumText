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
  TouchableOpacity
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

const openCamera = (props) => {
  return(
    <View>
      <Text>Camera Goes here</Text>
    </View>
  )
}
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
      <View style = {StyleSheet.container}>
        <StatusBar barStyle = "default" backgroundColor = 'green'/>
        <View>
      <Text>Camera Goes here</Text>
    </View>
        <TouchableOpacity
         
          onPress={this.onButtonPress}
          title="Start Camera">
          <Text>Open Camera</Text>
        </TouchableOpacity>
        {
        this.state.showCamera && 
          <Camera
          style = {{height:200}}
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
        }
      </View>
    );
  }
}
export default App;
