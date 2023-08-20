import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// local imports
import FilterDropdownExample from './src/pages/FilterDropdownExample';

export default function App() {
    return (
        <View style={styles.container}>
            <FilterDropdownExample />
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
