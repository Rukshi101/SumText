/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';


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




const BioSummaries = [
  {id:2, title:"Summary 2000"},
  {id:3, title:"Summary 1000"},
  {id:4, title:"Summary 4000"}
]
class HomeScreen extends React.Component {
 
  render() {
    return (
      <View>
          <Text style = {styles.title}>Recent Files</Text>
          <SectionList
          sections = {[
          {title:"Biology", data:BioSummaries},
            {title:"Science", data:BioSummaries}
          ]}
          renderItem = {({item}) =>(
            <View>
              <Text>{item.title}</Text>
              </View>
          )}
          renderSectionHeader = {({section}) =>(
            <View>
              <Text style ={styles.header}>
                {section.title}
            </Text>
              </View>
          )}
          />
      </View>
    );
  }
}

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
export default HomeScreen;