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
  const [title, setTitle] = useState(route.params.title);
  const [note, setNote] = useState(route.params.note);
  return (
    <View style={styles.container}>
      <TextInput
        defaultValue={route.params.title}
        style={styles.titleInput}
        onChangeText={(text) => setTitle(text)}
      />
      <TextInput
        //onChangeText={setNoteDescription}
        defaultValue={route.params.note}
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
          //If Global store exists, update the value in the global store
          if (globalStore != null) {
            let newNote = {
              title: title,
              note: note,
            };
            globalStore[route.params.indexOfNote] = newNote;
            await LocalDB.storeObject('global', globalStore);
            console.log(
              'Updated a note in the global store, new global store: ',
              globalStore,
            );
          } else {
            console.log(
              'error: Global state is not define whie editing a note',
            );
          }

          navigation.navigate('Home');
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
