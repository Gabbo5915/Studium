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
import Message from './components/Message'
import Footer from './components/Footer'



export default class App extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    return fetch('./components/mock.json')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          messages: responseJson,
        }, function () {

        });

      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    return (
      <View style={styles.container}>
        <Header
          centerComponent={{ text: 'Message', style: { color: '#fff', fontSize: 20 } }}
          rightComponent={{ icon: 'add', color: '#fff' }}
        />
        <ScrollView style={styles.messages}>
          <Message messages={this.state.messages} />
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
