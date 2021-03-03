import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import DeckStack from "../components/deck/deck";
import Button from "../components/button/Button";

const ViewDeck = ({navigation, deck}) => {
        return (<View>
            <DeckStack cardCount={deck.cards.length} deckNumber={deck.id}/>
            <Button><Text>Add Card</Text></Button>
            <Button><Text>Start Quiz</Text></Button>
            <Button><Text>Delete Deck</Text></Button>
        </View>);
};
export default ViewDeck;