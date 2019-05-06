import React, { Component } from 'react'
import { Button, SafeAreaView, Text, StyleSheet } from 'react-native'

export default class Header extends Component {
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

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#846bff',
        alignSelf: 'stretch',
        textAlign: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
    }
});