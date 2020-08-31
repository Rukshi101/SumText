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
} from 'react-native';

import PropTypes from 'prop-types';
import LocalDB from '../lib/localDB';

class PreviewScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wordList: null,
    };
  }

  componentDidMount() {
    let wordList = [];
    // Break down all the words detected by the camera
    if (
      this.props.route.params.wordBlock &&
      this.props.route.params.wordBlock.textBlocks &&
      this.props.route.params.wordBlock.textBlocks.length > 0
    ) {
      for (
        let idx = 0;
        idx < this.props.route.params.wordBlock.textBlocks.length;
        idx++
      ) {
        let text = this.props.route.params.wordBlock.textBlocks[idx].value;
        if (text && text.trim().length > 0) {
          let words = text.split(/[\s,.?]+/);
          if (words && words.length > 0) {
            for (let idx2 = 0; idx2 < words.length; idx2++) {
              if (words[idx2].length > 0) {
                wordList.push(words[idx2]);
              }
            }
          }
        }
      }
      this.setState({
        wordList: wordList,
      });
    }
  }
  // Pupulate the words UI for the user to select
  populateWords() {
    const wordViews = [];

    if (this.state.wordList && this.state.wordList.length > 0) {
      for (let idx = 0; idx < this.state.wordList.length; idx++) {
        wordViews.push(
          <TouchableHighlight
            key={'Word_' + idx}
            underlayColor={'#d6f9ff'}
            style={styles.wordWrapper}>
            <Text key={'word_' + idx} style={styles.word}>
              {this.state.wordList[idx]}
            </Text>
          </TouchableHighlight>,
        );
      }
    }
    // console.log(wordViews);
    return wordViews;
  }

  onSave = async () => {
    await LocalDB.storeObject('modTing', this.state.wordList);
    const getItBack = await LocalDB.getObject('modTing');
    console.log('From local storage: lets GOOOOOO', getItBack);
    let fullWord = '';
    for (let i = 0; i < this.state.wordList.length; i++) {
      fullWord = fullWord + ' ' + this.state.wordList[i];
    }
    this.props.navigation.navigate('Save', {
      recognizedWords: fullWord,
    });
  };

  onDelete = async () => {
    this.props.navigation.navigate('Camera');
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>This is what we recognized: </Text>
        </View>
        <ScrollView style={styles.scrollView}>
          <View style={styles.wordList}>{this.populateWords()}</View>
        </ScrollView>
        <View style={styles.bottomOptions}>
          <Button title="Save" onPress={this.onSave} />
          <Button title="Delete" onPress={this.onDelete} />
        </View>
      </View>
    );
  }
}

PreviewScreen.propTypes = {
  wordBlock: PropTypes.object,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 4,
  },
  word: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  header: {
    padding: 4,
  },
  wordList: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 4,
  },
  wordWrapper: {
    flex: 0,
    borderWidth: 0,
    padding: 4,
  },
  bottomOptions: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },
  scrollView: {
    height: 300,
  },
});

export default PreviewScreen;
