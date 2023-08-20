import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const RoundButton = ({ mark, onPress }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{mark}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        width: 40,
        height: 40,
        borderRadius: 40,
        backgroundColor: 'lightgray', // Ash color
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5
    },
    buttonText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default RoundButton;
