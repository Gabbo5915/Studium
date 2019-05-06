import React, { Component } from 'react'
import { Text, View, Image, FlatList } from 'react-native'
import { ListItem } from 'react-native-elements'

function Message(props) {
    renderMessageItem = ({ item, index }) => {
        return (
            <ListItem
                key={index}
                title={item.name}
                subtitle={item.lastMessage}
                hideChevron={true}
                leftAvatar={{ source: { uri: item.headImage } }}
            />
        );
    }

    return (
        <FlatList
            data={props.messages}
            renderItem={this.renderMessageItem}
            keyExtractor={item => item.id.toString()}
        />
    )
}
export default Message;
/*
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
*/