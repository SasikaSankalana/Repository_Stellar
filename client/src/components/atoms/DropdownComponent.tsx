import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

/**
 * A searchable dropdown
 * @param labelTitle
 * @param data
 * @constructor
 */
const DropdownComponent = ({ labelTitle, data, onReturnValue }) => {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const renderLabel = () => {
        if (value || isFocus) {
            return (
                <Text style={[styles.label, isFocus && { color: 'white' }]}>
                    { labelTitle }
                </Text>
            );
        }
        return null;
    };

    return (
        <View style={styles.container}>
                {renderLabel()}
                <Dropdown
                    style={[styles.dropdown, isFocus && { borderColor: 'black' }]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    itemContainerStyle={styles.itemContainerStyle}
                    itemTextStyle={styles.itemTextStyle}
                    containerStyle={styles.containerStyle}
                    itemStyle={styles.ItemStyle}
                    data={data}
                    search={true}
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocus ? 'Select item' : '...'}
                    searchPlaceholder="Search..."
                    value={value}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={item => {
                        setValue(item.value);
                        onReturnValue(item.value)
                        setIsFocus(false);
                    }}
                    activeColor="black"
                />
        </View>
    );
};

export default DropdownComponent;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 16,
        paddingBottom: 12,
        color: 'white',
        borderStyle: "solid",
        borderBottomWidth: 1,
        borderBottomColor: '#E4E4E4'
    },
    dropdown: {
        height: 50,
        color: 'white',
        paddingHorizontal: 8,
    },
    icon: {
        marginRight: 5,
        color: 'white'
    },
    label: {
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        color: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
        color: 'white',
    },
    iconStyle: {
        width: 20,
        height: 20,
        tintColor: 'white'
    },
    inputSearchStyle: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderColor: 'rgba(0, 0, 0, 0.5)',
        color: 'white',
        height: 40,
        fontSize: 16,
    },
    containerStyle: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderColor: 'rgba(0, 0, 0, 0.5)',
        borderStyle: "solid",
        borderBottomWidth: 1,
        borderBottomColor: '#E4E4E4',
    },
    itemContainerStyle: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    itemTextStyle: {
        color: 'white',
    },
    selectedStyle: {
        backgroundColor: 'blue',
        color: 'black',
        borderColor: 'blue'
    },
    ItemStyle: {
        backgroundColor: 'black',
    }
});