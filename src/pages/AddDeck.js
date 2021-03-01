import {View, Text} from "react-native";
import NavBar from "../components/navbar/navbar";
import PropTypes from "prop-types";
import React from "react";
import TextWithInput from "../components/input/TextWithInput";
import Button from "../components/button/Button";

class AddDeck extends React.Component {
    state = {
      newDeckName:''
    };
    static propTypes = {
        decks: PropTypes.arrayOf(PropTypes.object).isRequired
    };
    render() {
        const {decks} = this.props;
        const {newDeckName} = this.state;
        return (
            <View>
                <Text>What is the title of your new deck?</Text>
                <TextWithInput value={newDeckName} placeholder="Deck Title"/>
                <Button on><Text>Create Deck</Text></Button>
                <NavBar/>
            </View>
        );
    }
}

export default AddDeck;
PropsType.AddDeck = {
    decks: PropTypes.arrayOf(PropTypes.object)
};