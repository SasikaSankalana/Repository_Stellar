import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { FontAwesome } from "@expo/vector-icons";

interface PriceRangeProps {
    label?: string;
    sliderValue: number[];
    isFocus: boolean;
    setIsFocus: (isFocus: boolean) => void;
}

const PriceRange: React.FC<PriceRangeProps> = ({
    label = "Dropdown Label",
    sliderValue,
    isFocus = false,
    setIsFocus,
}) => {
    const renderLabel = () => {
        if (isFocus) {
            return (
                <Text style={[styles.label, isFocus && { color: "blue" }]}>
                    {label}
                </Text>
            );
        }
        return null;
    };

    return (
        <View style={styles.container}>
            {renderLabel()}
            <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
                containerStyle={styles.listContainer}
                placeholderStyle={styles.placeholder}
                selectedTextStyle={styles.selectedText(isFocus)}
                data={[]}
                placeholder={sliderValue.join(' - ')}
                labelField={''}
                valueField={''}
                onFocus={() => setIsFocus(true)}
                onBlur={() => { }}
                onChange={(item: any) => { }}
                activeColor="transparent"
                maxHeight={300}
                renderLeftIcon={() => (
                    <FontAwesome
                        style={styles.dropDownIcon}
                        color={isFocus ? "blue" : "gray"}
                        name="usd"
                        size={25}
                    />
                )}
                renderItem={() => (<></>)}
            />
        </View>
    );
};

export default PriceRange;

type Style = {
    container: any;
    listContainer: any;
    dropdown: any;
    dropDownIcon: any;
    label: any;
    placeholder: any;
    selectedText: any;
};

const styles = StyleSheet.create<Style>({
    container: {
        padding: 10,
        marginTop: 8,
    },
    listContainer: {
        borderRadius: 20,
        marginTop: 5,
        borderWidth: 0,
        backgroundColor: "lightgray",
    },
    dropdown: {
        height: 50,
        borderColor: "gray",
        borderWidth: 0.5,
        borderRadius: 50,
        paddingHorizontal: 8,
    },
    dropDownIcon: {
        marginRight: 5,
        marginLeft: 3,
    },
    label: {
        position: "absolute",
        backgroundColor: "white",
        left: 30,
        top: 2,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 12,
        color: "gray",
    },
    placeholder: {
        fontSize: 14,
        marginLeft: 5,
    },
    selectedText: (isOpen: boolean) => {
        return {
            fontSize: 12,
            color: isOpen ? "black" : "gray",
        };
    },
});
