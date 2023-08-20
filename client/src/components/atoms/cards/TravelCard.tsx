import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons';

interface TravelCardProps {
    travelMode: string;
    price: number;
    startTime: string;
    endTime: string;
    duration: string;
    isSelected: boolean;
    handlePress: () => void;
}

const TravelCard: React.FC<TravelCardProps> = ({
    travelMode,
    price,
    startTime,
    endTime,
    duration,
    isSelected,
    handlePress,
}) => {

    return (
        <TouchableOpacity style={[styles.cardContainer, (isSelected && styles.selectedCard)]} onPress={handlePress} >
            {isSelected && <View style={styles.icon}>
                <Feather name="check-circle" size={40} color="green" />
            </View>}

            <View style={{ display: 'flex', flexDirection: "row", flexGrow: 1, columnGap: 10, maxWidth: '100%' }}>
                <View style={styles.column}>
                    <Text style={styles.modeText}>{travelMode}</Text>
                    <Text style={styles.startTime}>{startTime}</Text>
                    <Text style={styles.sne}>START</Text>
                </View>

                <View style={[styles.column, { flexGrow: 1, justifyContent: 'center' }]}>
                    <Text style={styles.duration} numberOfLines={2}>{duration}</Text>
                </View>

                <View style={styles.column}>
                    <Text style={styles.priceText}>${price.toLocaleString("en-US")}</Text>
                    <Text style={styles.endTime}>{endTime}</Text>
                    <Text style={styles.sne}>END</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        width: 320,
        padding: 15,
        height: 140,
        flexShrink: 0,
        borderRadius: 10,
        backgroundColor: "rgba(18, 17, 17, 0.46)",
        marginTop: 10,
        borderWidth: 3,
        borderColor: "transparent",
    },
    selectedCard: {
        position: "relative",
        borderColor: "green",
    },
    icon: {
        position: "absolute",
        backgroundColor: "rgba(18, 17, 17, 0.46)",
        height: 50,
        width: 50,
        borderRadius: 20,
        bottom: 10,
        right: 10,
        zIndex: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    modeText: {
        fontSize: 16,
        color: "black",
        fontWeight: "700",
    },
    priceText: {
        fontSize: 16,
        color: "white",
        fontWeight: "400",
    },
    startTime: {
        fontSize: 20,
        color: "white",
        fontWeight: "400",
    },
    endTime: {
        fontSize: 20,
        color: "white",
        fontWeight: "700",
    },
    duration: {
        backgroundColor: "#D9D9D9",
        padding: 5,
        borderRadius: 5,
    },
    durBox: {
        width: 50,
        height: 24,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#FFF",
        backgroundColor: "#D9D9D9",
    },
    sne: {
        fontSize: 12,
        color: "rgba(255, 253, 253, 0.50)",
        fontWeight: "700",
    },
    column: {
        display: 'flex',
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
    },
});

export default TravelCard;
