import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'

export default class Message extends Component {
    render() {
        let pic = { uri: 'https://pbs.twimg.com/profile_images/842919346225790976/TZXgJ9Xp_400x400.jpg' };
        return (
            <View style={{
                flexDirection: 'row',
                alignSelf: 'stretch',
                height: 100,
            }}>
                <Image source={pic} style={{
                    margin: 25,
                    width: 50,
                    height: 50,
                    borderRadius: 25
                }} />
                <View style={{
                    justifyContent: 'center',
                    backgroundColor: 'white',
                }}>
                    <Text style={{
                        fontSize: 18
                    }}>Tony Stark</Text>
                    <Text style={{
                        textAlign: 'center'
                    }}>Last Message Last Message Last Message</Text>
                </View>
            </View>
        )
    }
}