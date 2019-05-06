import React, { Component } from 'react'
import { View, SafeAreaView, Text, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'

export default class Footer extends Component {
    render() {
        return (
            <SafeAreaView style={styles.footer}>
                <View>
                    <Icon name='book' color='grey' />
                    <Text>Session</Text>
                </View>
                <View>
                    <Icon name='search' color='grey' />
                    <Text>Discover</Text>
                </View>
                <View>
                    <Icon name='home' color='grey' />
                    <Text>Alerts</Text>
                </View>
                <View>
                    <Icon name='chat' color='lightblue' />
                    <Text>Messages</Text>
                </View>
                <View>
                    <Icon name='person' color='grey' />
                    <Text>Profile</Text>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    footer: {
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    }
});