import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Entypo } from "@expo/vector-icons";
import { Slider } from "@miblanchard/react-native-slider";

// local imports
import TravelCardContainer from '../components/atoms/cards/TravelCardContainer';
import Dropdown from '../components/atoms/filter/FilterDropdown';
import PriceRange from '../components/atoms/filter/FilterPriceRange';

const travelCardData = [
    {
        travelMode: 'Warp Odyssey',
        price: 2000,
        startTime: '10:00 AM',
        endTime: '10:30 AM',
        duration: '30 min',
    },
    {
        travelMode: 'Stellar Sojourn',
        price: 5.00,
        startTime: '11:00 AM',
        endTime: '12:00 PM',
        duration: '10 hour',
    },
    {
        travelMode: 'Stellar Sojourn',
        price: 2.75,
        startTime: '1:00 PM',
        endTime: '1:20 PM',
        duration: '20 min',
    },
    {
        travelMode: 'Warp Odyssey',
        price: 10.00,
        startTime: '2:00 PM',
        endTime: '3:00 PM',
        duration: '1 hour',
    },
    {
        travelMode: 'Stellar Sojourn',
        price: 1000,
        startTime: '3:30 PM',
        endTime: '3:45 PM',
        duration: '15 min',
    },
    {
        travelMode: 'Warp Odyssey',
        price: 500,
        startTime: '11:00 AM',
        endTime: '12:00 PM',
        duration: '1 hour',
    },
    {
        travelMode: 'Cosmic Rift',
        price: 2750,
        startTime: '1:00 PM',
        endTime: '1:20 PM',
        duration: '20 min',
    },
    {
        travelMode: 'Cosmic Rift',
        price: 2750,
        startTime: '1:00 PM',
        endTime: '1:20 PM',
        duration: '20 min',
    },
];

const TravelCardExample = () => {
    const dropDownOptions = [
        { label: 'All', value: 'all' },
        { label: 'Cosmic Rift', value: 'cosmic' },
        { label: 'Warp Odyssey', value: 'warp' },
        { label: 'Stellar Sojourn', value: 'stellar' }
    ];

    const prices = travelCardData.map(item => item.price);

    const min = Math.round(Math.min(...prices));
    const max = Math.round(Math.max(...prices));

    const [travelMode, setTravelMode] = useState<string>(dropDownOptions[0].value);
    const [sliderValue, setSliderValue] = useState([min, max]);
    const [isFocus, setIsFocus] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.filterArea}>
                <View style={{ flexGrow: 1 }}>
                    <Dropdown
                        label='Travel Mode'
                        options={dropDownOptions}
                        value={travelMode}
                        setValue={setTravelMode}
                    />
                </View>

                <View style={{ flexGrow: 1 }}>
                    <PriceRange
                        label='Price Range'
                        sliderValue={sliderValue}
                        isFocus={isFocus}
                        setIsFocus={setIsFocus}
                    />
                </View>
            </View>

            {isFocus && <View style={styles.slider}>
                <Text style={styles.sliderText}>{min}</Text>
                <Slider
                    animateTransitions
                    minimumValue={min}
                    maximumValue={max}
                    minimumTrackTintColor="black"
                    maximumTrackTintColor="darkgray"
                    thumbTintColor="#000000"
                    step={Math.round((min + max) / 100)}
                    value={sliderValue}
                    thumbStyle={{ height: 20, width: 20, backgroundColor: 'black' }}
                    onValueChange={setSliderValue}
                    containerStyle={{ flexGrow: 1 }}
                    onSlidingComplete={() => setIsFocus(false)}
                />
                <Text style={styles.sliderText}>{max}</Text>
                <Entypo onPress={() => setIsFocus(false)} name="cross" size={20} color="black" />
            </View>}

            <TravelCardContainer travelData={travelCardData.filter((data) => {
                if (travelMode === 'all') {
                    return data;
                } else {
                    return data.travelMode === dropDownOptions.find(option => option.value === travelMode)?.label;
                }
            }).filter((data) => {
                return data.price >= sliderValue[0] && data.price <= sliderValue[1];
            })} />
        </View>
    )
}

export default TravelCardExample;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    filterArea: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
    },
    slider: {
        position: "absolute",
        backgroundColor: "gray",
        top: 80,
        left: 10,
        right: 10,
        borderRadius: 20,
        paddingHorizontal: 20,
        zIndex: 999,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 10,
    },
    sliderText: {
        color: 'white',
    },
});
