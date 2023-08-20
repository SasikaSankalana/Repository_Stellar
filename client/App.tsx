import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// local imports
import FilterPriceRangeExample from './src/pages/FilterPriceRangeExample';

export default function App() {
    return (
        <View style={styles.container}>
            <FilterPriceRangeExample />
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
