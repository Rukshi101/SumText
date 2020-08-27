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

import HomeScreen from './src/components/HomeScreen';
import CameraScreen from './src/components/CameraScreen';


import {createStackNavigator} from 'react-navigation-stack';

const MainStackNavigator = createStackNavigator({
  Main: {
    screen: CameraScreen
  }
});
class App extends React.Component {
  
  render() {
    return (
    <MainStackNavigator />
      );
  }
}


export default App;
