import {View, Text} from "react-native";
import React, {Component} from "react";
import TextWithInput from "../components/input/TextWithInput";
import Button from "../components/button/Button";
import {bindActionCreators} from 'redux';
import {newDeck, newDeckName} from "../stores/DeckStore";
import {connect} from 'react-redux';
import {mapStateToProps} from "../stores/Store";

class AddDeck extends Component {
    onChangeAddDeck = (name) => {
        const {decks, actions} = this.props;
        const id = (decks.pop() || {id: -1}).id + 1 || 0;
        actions.newDeck(id, name);
    };
    onNameChange = (name) => {
        const {actions} = this.props;
        return actions.newDeckName(name);
    };

    render() {
        let {newDeckName} = this.props;
        return (
            <View>
                <Text>What is the title of your new deck?</Text>
                <TextWithInput value={newDeckName} onChange={(text) => this.onNameChange(text)}
                               placeholder="Deck Title"/>
                <Button onPress={() => this.onChangeAddDeck(newDeckName)}><Text>Create Deck</Text></Button>
            </View>
        )
    }
}

const ActionCreators = Object.assign(
    {},
    {newDeck, newDeckName},
);
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddDeck)