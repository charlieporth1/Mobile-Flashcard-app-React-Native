import React, {Component} from 'react';
import {
    View,
    Text,
} from 'react-native';
import DeckStack from "../components/deck/deck";
import Button from "../components/button/Button";
import {connect} from "react-redux";
import {mapStateToProps} from "../stores/Store";
import {selectDeck} from "../stores/DeckStore";
import {bindActionCreators} from "redux";

class ViewDeck extends Component {

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const { currentDeck } = this.props;
        return (<View>
            <Button><Text>Add Card</Text></Button>
            <Button><Text>Start Quiz</Text></Button>
            <Button><Text>Delete Deck</Text></Button>
        </View>);
    }
}
const ActionCreators = Object.assign(
    {},
    {selectDeck},
);
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ActionCreators, dispatch),
});
export default connect(mapStateToProps)(ViewDeck)