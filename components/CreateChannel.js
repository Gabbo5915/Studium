import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import { Card, ListItem, CheckBox, Header } from 'react-native-elements'

export default class CreateChannel extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    static navigationOptions = {
        header: (
            <Header
                leftComponent={{ text: 'Cancel', style: { color: 'white' } }}
                centerComponent={{ text: 'New Message', style: { color: '#fff', fontSize: 20 } }}
                rightComponent={{ text: 'OK', style: { color: 'white' } }}
            />
        ),
    };
    componentDidMount() {
        return fetch('https://raw.githubusercontent.com/Gabbo5915/Studium/master/components/messageData.json')
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

    renderMessageItem = ({ item, index }) => {
        return (
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <ListItem style={{ flex: 1 }}
                    key={index}
                    title={item.name}
                    leftAvatar={{ source: { uri: item.headImage } }}
                />
                <CheckBox
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checked={item.checked}
                    onPress={() => item.checked = !item.checked}
                />
            </View>
        );
    }


    render() {
        return (
            <FlatList
                data={this.state.messages}
                renderItem={this.renderMessageItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }
}
