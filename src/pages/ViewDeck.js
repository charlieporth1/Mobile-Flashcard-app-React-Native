import React, {Component} from 'react';
import {
    View,
    Text,
    Alert
} from 'react-native';
import Button from "../components/button/Button";
import {connect} from "react-redux";
import {mapStateToProps} from "../stores/Store";
import {removeDeck, selectDeck} from "../stores/DeckStore";
import {bindActionCreators} from "redux";
import {NO_DECK} from "../static/constants";

class ViewDeck extends Component {
    state = {
        currentDeck:undefined
    };
    deleteDeck = () => {
        const {currentDeck, actions, navigation} = this.props;
        const id = currentDeck.id;
        actions.removeDeck(id);
        Alert.alert("Successfully deleted deck");
        navigation.navigate('Home');
    };

    componentDidMount(): void {
        const {actions, route} = this.props;
        const {id, deck} = route.params;
        actions.selectDeck(id);
        console.log("deck",deck)
        this.setState({currentDeck: deck})
    }

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const {navigation } = this.props;
        const {currentDeck } = this.state;
        console.log("v render, currentDeck", currentDeck);
        return (<View>
            <Button onPress={() => navigation.navigate('AddCards', {id:currentDeck.id, currentDeck})}>
                <Text>Add Card</Text>
            </Button>
            <Button onPress={() => navigation.navigate('ViewQuestionPage', {id:currentDeck.id, currentDeck})}>
                <Text>Start Quiz</Text>
            </Button>
            <Button onPress={this.deleteDeck}>
                <Text>Delete Deck</Text>
            </Button>
        </View>);
    }

}

const ActionCreators = Object.assign(
    {},
    {removeDeck, selectDeck},
);
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ActionCreators, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(ViewDeck)