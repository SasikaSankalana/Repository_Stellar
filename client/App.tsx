import React, { useCallback, useMemo, useRef, useState } from 'react';
import {View, StyleSheet, Text, ImageBackground, TouchableOpacity} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import PassengerCount from "./src/components/atoms/PassengerCount";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet, {BottomSheetRefProps} from "./src/components/atoms/BottomSheet";
import DropdownComponent from "./src/components/atoms/DropdownComponent";
import 'react-native-gesture-handler';
import CountChangingTracker from "./src/components/molecules/CountChangingTracker";

const App = () => {
    const ref = useRef<BottomSheetRefProps>(null);
    const onPress = useCallback(() => {
        const isActive = ref?.current?.isActive();
        if (isActive) {
            ref?.current?.scrollTo(0);
        } else {
            ref?.current?.scrollTo(-400);
        }
    }, []);

    return (
            <GestureHandlerRootView style={styles.gestureHandlerRoot}>
                <SafeAreaView style={styles.container}>
                    <ImageBackground source={require('./src/assets/imageBackground.jpg')} style={styles.background}>
                        <StatusBar style="dark" />
                        <TouchableOpacity style={styles.button} onPress={onPress} />
                        <BottomSheet ref={ref} >
                            <View style={{flex: 1, backgroundColor: 'black'}} >
                                <CountChangingTracker />
                            </View>
                        </BottomSheet>
                    </ImageBackground>
                </SafeAreaView>
            </GestureHandlerRootView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        color: 'white'
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
    },
    text: {
        color: 'white'
    },
    gestureHandlerRoot: {
        flex: 1,
    },
    background: {
        flex: 1,
    },
    button: {
        height: 50,
        borderRadius: 25,
        aspectRatio: 1,
        backgroundColor: 'black'
    }
});

export default App;

