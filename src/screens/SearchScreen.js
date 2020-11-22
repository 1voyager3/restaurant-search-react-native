import React, { useState } from 'react';
import { Text, StyleSheet, View, ScrollView, TextInput } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';


const SearchScreen = ( {  } ) => {

  const [term, setTerm] = useState( '' );

  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = ( price ) => {
    console.log( results );
    //   price === '£' || '££' || '£££'
    return results.filter( result => result.price === price );
  };

  return (
      <>
        <SearchBar
            term={ term }
            onTermChange={ newTerm => setTerm( newTerm ) }
            onTermSubmit={ () => searchApi( term ) }
        />
        { errorMessage ? <Text>{ errorMessage }</Text> : null }

        <ScrollView>
          <ResultsList
              title='Cost Effective'
              results={ filterResultsByPrice( '£' ) }
          />
          <ResultsList
              title='Big Pricier'
              results={ filterResultsByPrice( '££' ) }
          />
          <ResultsList
              title='Big Spender'
              results={ filterResultsByPrice( '£££' ) }
          />
        </ScrollView>

      </>
  );
};

const styles = StyleSheet.create( {} );

export default SearchScreen;