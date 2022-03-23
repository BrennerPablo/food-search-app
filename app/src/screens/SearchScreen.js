import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        // price === '$' || '$$' || '$$$'
        return results.filter(results => {
            return results.price === price;
        })
    };

    return (
        <View style={styles.background}>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text style={styles.resultsCountStyle}>We have found {results.length} results</Text>
            <ScrollView>
                <ResultsList
                    results={filterResultsByPrice('$')}
                    title='Cost Effective' 
                />
                <ResultsList
                    results={filterResultsByPrice('$$')}
                    title='Bit Pricier'
                />
                <ResultsList
                    results={filterResultsByPrice('$$$')}
                    title='Big Spender'
                />
            </ScrollView>
        </View>
    );

};

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#FFFFFF',
        flex: 1
    },
    resultsCountStyle: {
        marginLeft: 10
    }
});

export default SearchScreen;
