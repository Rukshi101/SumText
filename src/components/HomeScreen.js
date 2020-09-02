/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component, useState, useEffect} from 'react';

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
  FlatList,
} from 'react-native';

import BookmarkScreen from '../components/BookMarkScreen';
import LocalDB from '../lib/localDB';

const BioSummaries = [
  {id: 2, title: 'Summary 2000'},
  {id: 3, title: 'Summary 1000'},
  {id: 4, title: 'Summary 4000'},
];

const HomeScreen = ({navigation}) => {
  const [globalStore, setGlobalStore] = useState([]);

  //Every Time Component is mounted, update the global store
  useEffect(() => {
    // This mounted variable is to prevent any errors that come with running an asynchronous function inside useEffect
    let mounted = true;

    async function fetchStore() {
      const store = await LocalDB.getObject('global');
      if (store != null) {
        for (let i = 0; i < store.length; i++) {
          store[i].key = (i + 1).toString();
        }
        setGlobalStore(store);
      } else {
        setGlobalStore([]);
      }
    }

    if (mounted) {
      fetchStore();
    }

    return () => (mounted = false);
  });

  return (
    <View>
      <Text>Recent Summaries</Text>
      <FlatList
        data={globalStore}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('View', {
                title: globalStore[item.key - 1].title,
                note: globalStore[item.key - 1].note,
                indexOfNote: item.key - 1,
              });
            }}>
            <Text style={styles.item}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 24,
    padding: 30,
    backgroundColor: 'limegreen',
    fontSize: 24,
  },
});
export default HomeScreen;
