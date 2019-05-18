import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Header } from 'react-native-elements'
import Footer from './components/Footer'
import FetchMessages from './components/FetchMessages'
import CreateChannel from './components/CreateChannel'
import { createStackNavigator, createAppContainer } from 'react-navigation'


class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <Header
          centerComponent={{ text: 'Message', style: { color: '#fff', fontSize: 20 } }}
          rightComponent={{ icon: 'add', color: '#fff', onPress: () => this.props.navigation.navigate('Channel') }}
        />
        <ScrollView>
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
  }
})

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Channel: CreateChannel,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
