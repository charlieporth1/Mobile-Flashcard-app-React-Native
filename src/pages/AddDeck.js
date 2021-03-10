import {View, Text, Alert} from "react-native";
import React, {Component} from "react";
import TextWithInput from "../components/input/TextWithInput";
import Button from "../components/button/Button";
import {bindActionCreators} from 'redux';
import {newDeck} from "../stores/DeckStore";
import {connect} from 'react-redux';
import {mapStateToProps} from "../stores/Store";

class AddDeck extends Component {
    state = {
        newDeckName: ''
    };
    onChangeAddDeck = (name) => {
        const {actions} = this.props;
        setTimeout(() => {
            Alert.alert("Successfully created deck");
            actions.newDeck(name);
        }, 100);
    };

    render() {
        let {newDeckName} = this.state;
        return (
            <View>
                <Text>What is the title of your new deck?</Text>
                <TextWithInput value={newDeckName} onChange={(text) => this.setState({newDeckName:text})}
                               placeholder="Deck Title"/>
                <Button onPress={() => this.onChangeAddDeck(newDeckName)}><Text>Create Deck</Text></Button>
            </View>
        )
    }
}

const ActionCreators = Object.assign(
    {},
    {newDeck},
);
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddDeck)