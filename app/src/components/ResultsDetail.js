import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';


const ResultsDetail = ({result}) => {
    return (
        <View style={styles.container}>
            <Image source={{uri: result.image_url}} style={styles.imageStyle}/>
            <Text style={styles.nameStyle}>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 10
    },
    imageStyle: {
        width: 250,
        height: 150,
        borderRadius: 8,
        marginBottom: 5
    },
    nameStyle: {
        fontWeight: 'bold',
        fontSize: 16
    }
});

export default ResultsDetail;
