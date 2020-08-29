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
  SectionList,
} from 'react-native';
import HomeScreen from '../components/HomeScreen';

const BioSummaries = [
  {id:2, title:"Summary 2000"}
]
const BookMarkScreen = ({navigation})=>(
      <View>
        <Text style={styles.title}>Bookmarked Summaries</Text>
        <SectionList
          sections={[
            {title: 'Biology', data: BioSummaries},
            {title: 'Science', data: BioSummaries},
          ]}
          renderItem={({item}) => (
            <View>
              <Text>{item.title}</Text>
            </View>
          )}
          renderSectionHeader={({section}) => (
            <View>
              <Text style={styles.header}>{section.title}</Text>
            </View>
          )}
          />
          <Button title = "Go Home"
          onPress = {() => navigation.push('Home')}
          />
      </View>
   
);


const styles = StyleSheet.create({
  item: {
    backgroundColor: 'black',
    padding: 20,
    marginVertical: 2,
  },
  header: {
    backgroundColor: 'blue',
    padding: 19,
    marginVertical: 2,
  },

  title:{
    fontSize:20
  }
})
export default BookMarkScreen

