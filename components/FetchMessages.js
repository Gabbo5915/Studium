import React from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements'

export default class FetchMessages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentWillMount() {
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
                subtitle={item.lastMessage}
                hideChevron={true}
                leftAvatar={{ source: { uri: item.headImage } }}
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
