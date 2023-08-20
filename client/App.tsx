import React from 'react';
import {View, StyleSheet, Text, ImageBackground} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import DropdownComponent from "./src/components/atoms/DropdownComponent";

const App = () => {

    // const [test, setTest] = React.useState()
    //
    // React.useEffect(()=>{
    //     console.log(test)
    // },[test])
    //
    // const data = [
    //     { label: 'Urenus', value: '1' },
    //     { label: 'Nepchune', value: '2' },
    //     { label: 'Earth', value: '3' },
    //     { label: 'Item 4', value: '4' },
    //     { label: 'Item 5', value: '5' },
    //     { label: 'Item 6', value: '6' },
    //     { label: 'Item 7', value: '7' },
    //     { label: 'Item 8', value: '8' },
    // ];

    return (
        <SafeAreaView style={styles.container}>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default App;
