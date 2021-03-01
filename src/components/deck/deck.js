import React from 'react';
import {
    View,
    Text,
} from 'react-native';

const DeckStack = ({ style, deckNumber, cardCount }) =>   {
        return (
            <View>
                <Text>Deck {deckNumber}</Text>
                <Text>{cardCount} Cards</Text>
            </View>
        );
};

export default DeckStack;
