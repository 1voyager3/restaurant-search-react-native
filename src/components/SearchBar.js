import React from 'react';
import { Text, StyleSheet, View, Button, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';


const SearchBar = ( { term, onTermChange, onTermSubmit } ) => {

  return (
      <View style={ styles.backgroundStyle }>
        <Feather name="search" style={ styles.iconStyle }/>
        <TextInput
            placeholder="Search"
            style={ styles.inputStyle }
            value={ term }
            autoCapitalize='none'
            autoCorrect={ false }
            onChangeText={ onTermChange }
            onEndEditing={ onTermSubmit }
        />
      </View>
  );
};

const styles = StyleSheet.create( {
  backgroundStyle: {
    marginTop: 10,
    backgroundColor: '#e9e8e9',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginBottom: 10
  },
  inputStyle: {
    flex: 1,
    fontSize: 20
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 10
  }
} );

export default SearchBar;