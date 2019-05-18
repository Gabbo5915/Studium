import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem, CheckBox } from 'react-native-elements'

export default class Create extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
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
            <ListItem
                key={index}
                title={item.name}
                hideChevron={true}
                leftAvatar={{ source: { uri: item.headImage } }}
            />
            ,
            <CheckBox
                checked={this.state.checked}
                onPress={() => this.setState({ checked: !this.state.checked })}
            />
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