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
  TouchableHighlight,
  SectionList,
  TextInput,
} from 'react-native';

import PropTypes from 'prop-types';
import LocalDB from '../lib/localDB';

class SaveScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          label="Note Title here"
          mode="outlined"
          //onChangeText={setNoteTitle}
          style={styles.title}
        />
        <TextInput
          label="Note Description"
          //onChangeText={setNoteDescription}
          defaultValue={this.props.route.params.recognizedWords}
          mode="flat"
          multiline={true}
          style={styles.text}
          scrollEnabled={true}
          returnKeyLabel="done"
          blurOnSubmit={true}
        />
        <Button title="Save" />
      </View>
    );
  }
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
  },
  text: {
    height: 300,
    fontSize: 16,
  },
});

export default SaveScreen;
