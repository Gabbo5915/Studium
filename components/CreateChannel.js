import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import { ListItem, CheckBox, Header } from 'react-native-elements'

class Row extends Component {
    constructor(props) {
        super(props);
        this.state = { checked: false };
    }

    render() {
        return (
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between'
            }} >
                <ListItem style={{ flex: 1 }}
                    title={this.props.item.name}
                    leftAvatar={{ source: { uri: this.props.item.headImage } }}
                />
                <CheckBox
                    checkedIcon='check-circle'
                    uncheckedIcon='circle-o'
                    checked={this.state.checked}
                    onPress={() => this.setState({ checked: !this.state.checked })}
                />
            </View>
        );
    }
}

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


    render() {
        return (
            <FlatList
                data={this.state.messages}
                renderItem={({ item }) => <Row item={item} />}
                keyExtractor={item => item.id.toString()}
            />
        );
    }
}
