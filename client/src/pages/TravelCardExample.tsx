import React from 'react';
import { View } from 'react-native';

// local imports
import TravelCardContainer from '../components/atoms/cards/TravelCardContainer';

const travelCardData = [
    {
        travelMode: 'Bus',
        price: '$20000000',
        startTime: '10:00 AM',
        endTime: '10:30 AM',
        duration: '30 min',
    },
    {
        travelMode: 'Train',
        price: '$5.00',
        startTime: '11:00 AM',
        endTime: '12:00 PM',
        duration: '10 hour',
    },
    {
        travelMode: 'Subway',
        price: '$2.75',
        startTime: '1:00 PM',
        endTime: '1:20 PM',
        duration: '20 min',
    },
    {
        travelMode: 'Car',
        price: '$10.00',
        startTime: '2:00 PM',
        endTime: '3:00 PM',
        duration: '1 hour',
    },
    {
        travelMode: 'Bike',
        price: '$0.00',
        startTime: '3:30 PM',
        endTime: '3:45 PM',
        duration: '15 min',
    },
    {
        travelMode: 'Train',
        price: '$5.00',
        startTime: '11:00 AM',
        endTime: '12:00 PM',
        duration: '1 hour',
    },
    {
        travelMode: 'Subway',
        price: '$2.75',
        startTime: '1:00 PM',
        endTime: '1:20 PM',
        duration: '20 min',
    },
];

const TravelCardExample = () => {
    return (
        <View style={{ width: '100%' }}>
            <TravelCardContainer travelData={travelCardData} />
        </View>
    )
}

export default TravelCardExample;
