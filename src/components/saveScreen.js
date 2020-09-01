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
  const [title, setTitle] = useState('');
  const [note, setNote] = useState(route.params.recognizedWords);
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.titleInput}
        placeholder="e.g. My New Note!"
        onChangeText={(text) => setTitle(text)}
      />
      <TextInput
        //onChangeText={setNoteDescription}
        defaultValue={route.params.recognizedWords}
        mode="flat"
        multiline={true}
        style={styles.noteInput}
        scrollEnabled={true}
        returnKeyLabel="done"
        blurOnSubmit={true}
        onChangeText={(text) => setNote(text)}
      />
      <Button
        title="Save"
        onPress={async () => {
          //check if the global store has been made yet
          const globalStore = await LocalDB.getObject('global');
          console.log('Got the global store: ', globalStore);
          //If Global store exists, insert new value into global store
          if (globalStore != null) {
            let newNote = {
              title: title,
              note: note,
            };
            globalStore.push(newNote);
            await LocalDB.storeObject('global', globalStore);
            console.log(
              'Inserted the new note into the global store, new global store: ',
              globalStore,
            );
          } else {
            //otherwise, make a new global store and store it under the 'global' key
            let newNote = {
              title: title,
              note: note,
            };
            let newGlobalStore = [newNote];
            await LocalDB.storeObject('global', newGlobalStore);
            console.log('Made new global store: ', newGlobalStore);
          }

          navigation.navigate('Camera');
        }}
      />
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
  titleInput: {
    fontSize: 24,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#777',
  },
  noteInput: {
    height: 300,
    fontSize: 16,
  },
});
