import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

// local imports
import HamburgerMenuExample from './src/pages/HamburgerMenuExample';

export default function App() {
    return (
        <View style={styles.container}>
            <HamburgerMenuExample />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
