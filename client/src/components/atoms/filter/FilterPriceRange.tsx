import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { FontAwesome, Entypo } from "@expo/vector-icons";
import { Slider } from "@miblanchard/react-native-slider";

interface PriceRangeProps {
    label?: string;
    min?: number;
    max?: number;
    sliderValue: number[];
    setSliderValue: (value: number[]) => void;
}

const PriceRange: React.FC<PriceRangeProps> = ({
    label = "Dropdown Label",
    min = 0,
    max = 100,
    sliderValue,
    setSliderValue,
}) => {
    const [isFocus, setIsFocus] = useState(false);

    useEffect(() => {
        sliderValue = [min, max];
    }, []);    
    
    const renderLabel = () => {
        if (sliderValue || isFocus) {
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

            {isFocus && <View style={styles.slider}>
                <Text style={styles.sliderText}>{min}</Text>
                <Slider
                    animateTransitions
                    minimumValue={min}
                    maximumValue={max}
                    minimumTrackTintColor="black"
                    maximumTrackTintColor="darkgray"
                    thumbTintColor="#000000"
                    step={1}
                    value={sliderValue}
                    thumbStyle={{ height: 20, width: 20, backgroundColor: 'black' }}
                    onValueChange={setSliderValue}
                    containerStyle={{ flexGrow: 1 }}
                    onSlidingComplete={() => setIsFocus(false)}
                />
                <Text style={styles.sliderText}>{max}</Text>
                <Entypo onPress={() => setIsFocus(false)} name="cross" size={20} color="black" />
            </View>}
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
    slider: any;
    sliderText: any;
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
    slider: {
        position: "absolute",
        backgroundColor: "gray",
        top: 70,
        left: 10,
        borderRadius: 20,
        paddingHorizontal: 20,
        zIndex: 999,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 10,
    },
    sliderText: {
        color: 'white',
    },
});
