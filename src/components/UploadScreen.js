/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{Component} from 'react';


import{
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TouchableOpacity,
  SectionList
} from 'react-native';

import BookmarkScreen from '../components/BookMarkScreen';


const BioSummaries = [
  {id:2, title:"Summary 2000"},
  {id:3, title:"Summary 1000"},
  {id:4, title:"Summary 4000"}
]
const UploadScreen = ({navigation})=>(

      <View>
          <Text style = {styles.title}>UPLOAD FILES COMING SOON EH?</Text>
          
           <Button title = "Go to New Page"
          onPress = {() =>navigation.push("Bookmarks")}
          />
      </View>

);

const styles =StyleSheet.create({
  item:{
    backgroundColor:'black',
    padding:20,
    marginVertical:2
  },
  header:{
    backgroundColor:'grey',
    padding:19,
    marginVertical:2,
    fontSize:20,
    fontWeight:'bold'
  },
  title:{
    fontSize:20
  }
})


export default UploadScreen