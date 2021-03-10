import React, {Component} from 'react';
import {
    View,
    Text,
} from 'react-native';
import DeckStack from "../components/deck/deck";
import {mapStateToProps} from "../stores/Store";
import {connect} from 'react-redux';
import {selectDeck} from "../stores/DeckStore";
import {bindActionCreators} from "redux";
import {NO_DECK} from "../static/constants";
import ArrayExt from "../models/ArrayExt";

class Home extends Component {
    resetCurrentDeck = () => {
        const {actions} = this.props;
        actions.selectDeck(NO_DECK);
    };

    componentDidMount(): void {
        this.resetCurrentDeck();
    }

    render() {
        const {decks = new  ArrayExt, navigation} = this.props;
        return (
            <View>
                {!decks.isEmpty  ? decks.map((deck) => {
                        return <DeckStack key={deck.id}
                                          onClickAction={() => this.onClick(deck.id)}
                                          navigation={navigation}
                                          deck={deck}/>
                    }) :
                    <Text>Zero decks added</Text>
                }
            </View>
        );
    }

    onClick(deckId) {
        this.resetCurrentDeck();
        setTimeout(() => {
            const {actions} = this.props;
            actions.selectDeck(deckId);
        }, 100);
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