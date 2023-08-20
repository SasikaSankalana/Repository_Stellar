import React, { useState } from 'react';
import { View, SafeAreaView } from 'react-native';
// import { Stack } from 'expo-router';

// local imports
import FilterDropdown from '../components/atoms/filter/FilterDropdown';

const FilterDropdownExample = () => {
    const dropDownOptions = [
        { label: 'Cosmic Rift', value: 'cosmic' },
        { label: 'Warp Odyssey', value: 'warp' },
        { label: 'Stellar Sojourn', value: 'stellar' }
    ];

    const [value, setValue] = useState<string>(dropDownOptions[0].value);

    return (
        <View style={{ width: '100%' }}>
            {/* <Stack.Screen
                options={{
                    headerShadowVisible: false,
                    headerTitle: "Test"
                }}
            /> */}

            <FilterDropdown
                options={dropDownOptions}
                value={value}
                setValue={setValue}
            />
        </View>
    )
}

export default FilterDropdownExample