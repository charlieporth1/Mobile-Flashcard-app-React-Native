import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import NavBar from "../components/navbar/navbar";
import DeckStack from "../components/deck/deck";
import PropTypes from 'prop-types';

class MainPage extends React.Component {
    static propTypes = {
        decks: PropTypes.arrayOf(PropTypes.object).isRequired
    };
    render() {
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
}

export default MainPage;