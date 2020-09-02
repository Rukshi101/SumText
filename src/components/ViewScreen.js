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
});
