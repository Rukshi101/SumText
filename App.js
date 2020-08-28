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


import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from "@react-navigation/stack"
import HomeScreen from './src/components/HomeScreen';
import CameraScreen from './src/components/CameraScreen';
import BookmarkScreen from './src/components/BookMarkScreen';


const Tab = createBottomTabNavigator();
const HomeStack =createStackNavigator();
function HomeStackScreen(){
  return(
    <HomeStack.Navigator>
      <HomeStack.Screen name = "Home" component = {HomeScreen}/>
    </HomeStack.Navigator>
  )
}


const BookMarkStack =createStackNavigator();
function BookMarkScreen(){
  return(
    <HomeStack.Navigator>
      <HomeStack.Screen name = "Home" component = {HomeScreen}/>
    </HomeStack.Navigator>
  )
}

class App extends React.Component {
  
  render() {
    return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name = "Home" component = {HomeStackScreen}/>
        <Tab.Screen name = "Camera" component = {CameraScreen}/>
        <Tab.Screen name = "Upload" component = {CameraScreen}/>
        <Tab.Screen name = "Bookmarked" component = {BookmarkScreen}/>
      </Tab.Navigator>
      </NavigationContainer>
      );
  }
}


export default App;
