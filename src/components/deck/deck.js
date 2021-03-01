import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import PropTypes from "prop-types";

export default class DeckStack extends React.Component  {
    static propTypes = {
        cardCount:PropTypes.number.isRequired,
        deckNumber:PropTypes.number.isRequired,
    };
    render() {
        const {deckNumber, cardCount} = this.props;
        return (
            <View>

                <Text>Deck {deckNumber}</Text>
                <Text>{cardCount} Cards</Text>
            </View>
        );
    }
}

export default DeckStack;
PropsType.DeckStack = {

};