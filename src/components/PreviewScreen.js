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

import PropTypes from 'prop-types';
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
      this.props.wordBlock &&
      this.props.wordBlock.textBlocks &&
      this.props.wordBlock.textBlocks.length > 0
    ) {
      for (let idx = 0; idx < this.props.wordBlock.textBlocks.length; idx++) {
        let text = this.props.wordBlock.textBlocks[idx].value;
        if (text && text.trim().length > 0) {
          let words = text.split(/[\s,.?]+/);
          if (words && words.length > 0) {
            for (let idx2 = 0; idx2 < words.length; idx2++) {
              if (words[idx2].length > 0) wordList.push(words[idx2]);
            }
          }
        }
      }
      this.setState({
        wordList: wordList,
      });
    }
  }
  render() {
    return (
      <ScrollView>
        <Text>{this.state.wordList}</Text>
      </ScrollView>
    );
  }
}

PreviewScreen.propTypes = {
  wordBlock: PropTypes.object,
};

export default PreviewScreen;
