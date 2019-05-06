/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Header } from 'react-native-elements'
import Footer from './components/Footer'
import FetchMessages from './components/FetchMessages'


export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          centerComponent={{ text: 'Message', style: { color: '#fff', fontSize: 20 } }}
          rightComponent={{ icon: 'add', color: '#fff' }}
        />
        <ScrollView style={styles.messages}>
          <FetchMessages />
        </ScrollView>
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  messages: {
    flex: 1
  },
  footer: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  }
});
