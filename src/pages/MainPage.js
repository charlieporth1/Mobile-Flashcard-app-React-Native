import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import NavBar from "../components/navbar/navbar";
import DeckStack from "../components/deck/deck";
import PropTypes from 'prop-types';

function MainPage() {
    const {decks} = this.props;
    return (
        <View>
            {decks.map((deck) => {
                return <DeckStack cardCount={deck.cards.length} deckNumber={deck.deckNumber}/>
            })}
            <NavBar/>
        </View>
    );
}

export default MainPage;
PropsType.MainPage = {
    decks: PropTypes.arrayOf(PropTypes.object).isRequired
};