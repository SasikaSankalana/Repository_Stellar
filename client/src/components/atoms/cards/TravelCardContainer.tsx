import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

// local imports
import TravelCard from './TravelCard';

interface TravelCardProps {
    travelMode: string;
    price: string;
    startTime: string;
    endTime: string;
    duration: string;
};

interface TravelCardContainerProps {
    travelData: TravelCardProps[]
};

const TravelCardContainer: React.FC<TravelCardContainerProps> = ({
    travelData
}) => {
    const [selectedCard, setSelectedCard] = useState(-1);

    const handlePress = (index: number) => {
        setSelectedCard(index);
    }

    return (
        <View style={styles.cardContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {travelData.map((data, index) => (
                    <TravelCard
                        key={index}
                        travelMode={data.travelMode}
                        price={data.price}
                        startTime={data.startTime}
                        endTime={data.endTime}
                        duration={data.duration}
                        isSelected={selectedCard === index}
                        handlePress={() => handlePress(index)}
                    />
                ))}
            </ScrollView>
        </View>
    )
}

export default TravelCardContainer;

const styles = StyleSheet.create({
    cardContainer: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
    },
});