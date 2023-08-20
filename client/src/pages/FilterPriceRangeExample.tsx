import React, { useState } from 'react';
import { View } from 'react-native';

// local imports
import FilterPriceRange from '../components/atoms/filter/FilterPriceRange';

const FilterPriceRangeExample = () => {
    const [sliderValue, setSliderValue] = useState([0]);

    return (
        <View style={{ width: '100%' }}>
            <FilterPriceRange
                label='Price Range'
                sliderValue={sliderValue}
                setSliderValue={setSliderValue}
                min={100}
                max={1000}
            />
        </View>
    )
}

export default FilterPriceRangeExample