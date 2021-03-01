import {View, Text} from "react-native";
import React from "react";
import TextWithInput from "../components/input/TextWithInput";
import Button from "../components/button/Button";

const AddDeck = ({navigation, decks = []}) => {
        const {newDeckName} = this.state;
        return (
            <View>
                <Text>What is the title of your new deck?</Text>
                <TextWithInput value={newDeckName} placeholder="Deck Title"/>
                <Button><Text>Create Deck</Text></Button>
            </View>
        )
};

export default AddDeck;