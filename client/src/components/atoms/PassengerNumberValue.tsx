import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';

const RoundButton = ({ number }) => {
    return (
        <View style={styles.button}>
            <Text style={styles.buttonText}>{number}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        width: 40,
        height: 40,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5
    },
    buttonText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white'
    },
});

export default RoundButton;
