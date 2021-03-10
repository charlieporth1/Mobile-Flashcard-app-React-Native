import React, {Component} from "react";
import {
    View,
    Text,
} from 'react-native';
import {connect} from "react-redux";
import {mapStateToProps} from "../stores/Store";
import Button from "../components/button/Button";
import {randomNumber} from "../utils/utils";
import '../utils/prototypes';
import {selectDeck} from "../stores/DeckStore";
import {bindActionCreators} from "redux";

class ViewQuestionPage extends Component {
    state = {
        isViewAnswer: false
    };
    toggleViewAnswer = () => {
        this.setState({isViewAnswer: !this.state.isViewAnswer})
    };
    componentDidMount(): void {
        const {actions, route} = this.props;
        const id = route.params.id;
        actions.selectDeck(id);
    }
    render() {
        const {currentDeck} = this.props;
        const {isViewAnswer} = this.state;
        const cards = (currentDeck || {cards: []}.cards);
        console.log("currentDeck", currentDeck);
        if ((currentDeck) && !cards.isEmpty) {
            const index = randomNumber(0, cards.length - 1);
            const currentCard = cards[index];
            return <View>
                <Text>{currentCard.question}</Text>
                <Button onPress={this.toggleViewAnswer}>
                    <Text>Click to view Answer</Text>
                </Button>
                {isViewAnswer ? <Text>{currentCard.answer}</Text> : undefined}
            </View>;
        } else {
            return <View>
                <Text>This deck has {cards.length} cards in it</Text>
            </View>
        }
    }
}
const ActionCreators = Object.assign(
    {},
    {selectDeck},
);
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ActionCreators, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(ViewQuestionPage)