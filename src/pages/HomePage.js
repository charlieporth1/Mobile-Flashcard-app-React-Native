import React, {Component} from 'react';
import {
    View,
    Text,
} from 'react-native';
import DeckStack from "../components/deck/deck";
import {mapStateToProps} from "../stores/Store";
import { connect } from 'react-redux';
import {selectDeck} from "../stores/DeckStore";
import {bindActionCreators} from "redux";

class Home extends Component {
    render() {
        const { decks = [], navigation } = this.props;
        return (
            <View>
                {decks.length > 0 ? decks.map((deck) => {
                        return <DeckStack key={deck.id} onClickAction={()=>this.onClick(deck.id)} navigation={navigation} cardCount={deck.cards.length} id={deck.id}/>
                    }) :
                    <Text>Zero decks added</Text>
                }
            </View>
        );
    }
    onClick(deckId) {
        const {actions} = this.props;
        actions.selectDeck(deckId);
    }
}

const ActionCreators = Object.assign(
    {},
    {selectDeck},
);
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ActionCreators, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(Home)