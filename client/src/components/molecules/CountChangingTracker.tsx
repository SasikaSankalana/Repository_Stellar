import {Button, Dimensions, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useCallback, useEffect, useImperativeHandle, useState} from 'react';
import RoundButton from "../atoms/RoundButton";
import PassengerNumberValue from "../atoms/PassengerNumberValue";

const CountChangingTracker = () => {
    const [adultCount, setAdultCount] = useState(0);
    const [childrenCount, setChildrenCount] = useState(0);
    const [infantsCount, setInfantsCount] = useState(0);

    // adult count
    const incrementAdultValue = () => {
        setAdultCount(count => count + 1);
    }
    const decrementAdultValue = () => {
        if (adultCount <= 0) {
            setAdultCount(0);
        } else {
            setAdultCount(count => count - 1);
        }
    }

    // children count
    const incrementChildrenCount = () => {
        setChildrenCount(count => count + 1);
    }
    const decreaseChildrenCount = () => {
        if (childrenCount <= 0) {
            setChildrenCount(0);
        } else {
            setChildrenCount(count => count - 1);
        }
    }

    // infants count
    const incrementInfantsCount = () => {
        setInfantsCount(count => count + 1);
    }
    const decreaseInfantsCount = () => {
        if (infantsCount <= 0) {
            setInfantsCount(0);
        } else {
            setInfantsCount(count => count - 1);
        }
    }

    return (
        <View style={styles.contentContainer}>
            <Text style={styles.title}>PASSENGERS</Text>
            <View style={styles.incrementDecrementLine}>
                <View>
                    <Text style={styles.text}>Adults</Text>
                    <Text style={styles.text}>Age 12+</Text>
                </View>
                <View style={styles.container}>
                    <RoundButton mark='-' onPress={decrementAdultValue} />
                    <PassengerNumberValue number={adultCount} />
                    <RoundButton mark='+' onPress={incrementAdultValue} />
                </View>
            </View>
            <View style={styles.incrementDecrementLine}>
                <View>
                    <Text style={styles.text}>Children</Text>
                    <Text style={styles.text}>Age 2 - 11</Text>
                </View>
                <View style={styles.container}>
                    <RoundButton mark='-' onPress={decreaseChildrenCount} />
                    <PassengerNumberValue number={childrenCount} />
                    <RoundButton mark='+' onPress={incrementChildrenCount} />
                </View>
            </View>
            <View style={styles.incrementDecrementLine}>
                <View>
                    <Text style={styles.text}>Infants</Text>
                    <Text style={styles.text}>Age under 2, on lap</Text>
                </View>
                <View style={styles.container}>
                    <RoundButton mark='-' onPress={decreaseInfantsCount} />
                    <PassengerNumberValue number={infantsCount} />
                    <RoundButton mark='+' onPress={incrementInfantsCount} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        alignItems: "flex-start",
        padding: 10
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white', // White text color
    },
    text: {
        fontSize: 18,
        color: 'white', // White text color
    },
    number: {
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        fontSize: 18,
        color: 'white', // White text color
    },
    container: {
        flex: 1,
        flexDirection: 'row', // Align items horizontally
        justifyContent: "flex-end", // or other justifications
        paddingHorizontal: 20, // Add padding between components horizontally
        flexWrap: "wrap"
    },
    containerVertical: {
        flex: 1,
        flexDirection: 'column', // Align items horizontally
        justifyContent: 'center',
        alignItems: 'center',
    },
    incrementDecrementLine: {
        flexDirection: 'row',
        margin: 10,
        marginLeft: 0,
        justifyContent: 'space-between'
    }
});

export default CountChangingTracker;