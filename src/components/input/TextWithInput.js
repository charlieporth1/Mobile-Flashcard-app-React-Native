import React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
} from 'react-native';

function getPlaceholderStyle(props) {
  return props.value ? {} : styles.placeholderFont;
}

const TextWithInput = ({ style, ...props }) => {
  const { autoCorrect = false, spellCheck = false, value, placeholder, maxLength, onChange } = props;

  return (
    <View style={styles.maxWidth}>
      {value ? (
        <Text style={styles.title}>{placeholder}</Text>
      ) : (
        <Text style={{ height: 35 }} />
      )}
      <TextInput
        maxLength={maxLength}
        {...props}
        style={[styles.input, style, getPlaceholderStyle(props)]}
        placeholder={placeholder}
        placeholderTextColor='gray'
        autoCorrect={spellCheck}
        spellCheck={autoCorrect}
        onChangeText={(text)=> onChange(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    color: 'black',
    width: '100%',
    height: 50,
    paddingHorizontal: 10,
    borderBottomColor: '#E5E5E5',
    borderBottomWidth: 1,
    fontSize: 25,
  },
  maxWidth: {
    width: '100%',
  },
  placeholderFont: {
    color: 'gray',
    fontSize: 15,
    opacity: 1.0,
  },
  title: {
    color: 'black',
    fontSize: '15',
    marginTop: 20,
    marginLeft: 10,
  },
  invalid: {
    backgroundColor: 'red',
  },
});
export default TextWithInput;
