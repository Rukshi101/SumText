import React, {useState} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  SectionList,
  TextInput,
} from 'react-native';

import PropTypes from 'prop-types';
import LocalDB from '../lib/localDB';

export default function SaveScreen({route, navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{route.params.title}</Text>
      <Text styl={styles.note}>{route.params.note}</Text>
      <View style={styles.bottomOptions}>
        <Button
          title="Edit"
          onPress={() => {
            navigation.navigate('Edit', {
              title: route.params.title,
              note: route.params.note,
              indexOfNote: route.params.indexOfNote,
            });
          }}
        />
        <Button
          title="Delete"
          onPress={async () => {
            const globalStore = await LocalDB.getObject('global');
            globalStore.splice(route.params.indexOfNote, 1);
            await LocalDB.storeObject('global', globalStore);
            console.log(
              'Succesfully removed a note from the global store, new store: ',
              globalStore,
            );
            navigation.navigate('Home');
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    borderBottomWidth: 1,
    borderColor: '#777',
  },
  note: {
    height: 300,
    fontSize: 16,
  },
  bottomOptions: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },
});
