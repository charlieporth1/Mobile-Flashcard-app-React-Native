import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import DeckStack from "../components/deck/deck";

const Home = ({navigation, decks = []}) => {

    return (
        <View>
            {decks.length > 0 ? decks.map((deck) => {
                    return <DeckStack cardCount={deck.cards.length} deckNumber={deck.deckNumber}/>
                }) :
                <Text>Zero decks added</Text>
            }
        </View>
    );
};

export default Home;