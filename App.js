/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Alert, SafeAreaView, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Message from './components/Message'

class Header extends Component {
  render() {
    return (
      <SafeAreaView style={styles.header}>
        <Button onPress={() => {
          Alert.alert('You tapped the left button');
        }} title={this.props.left} color='white' />
        <Text style={{ fontSize: 20, alignSelf: 'center', color: 'white' }}>{this.props.title}</Text>
        <Button onPress={() => {
          Alert.alert('You tapped the right button');
        }} title={this.props.right} color='white' />
      </SafeAreaView>
    )
  }
}


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Header title='Message' left='blank' right='add' />
        <ScrollView style={styles.Message}>
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
        </ScrollView>
        <SafeAreaView style={{ flexDirection: 'row' }}>
          <Button title='CLICK' />
          <Button title='CLICK' />
          <Button title='CLICK' />
          <Button title='CLICK' />
          <Button title='CLICK' />
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: '#846bff',
    alignSelf: 'stretch',
    textAlign: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  Message: {

  }
});
