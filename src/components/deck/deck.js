import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import NavBar from "../components/navbar/navbar";
import PropTypes from "prop-types";

function DeckStack() {
    const {deckNumber, cardCount} = this.props;
    return (
        <View>

            <Text>Deck {deckNumber}</Text>
            <Text>{cardCount} Cards</Text>
        </View>
    );
}

export default DeckStack;
PropsType.DeckStack = {
    cardCount:PropTypes.number.isRequired,
    deckNumber:PropTypes.number.isRequired,
};