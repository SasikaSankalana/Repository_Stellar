import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown as NpmDropdown } from 'react-native-element-dropdown';
import { MaterialIcons, Entypo } from '@expo/vector-icons';

const Dropdown = (props) => {
    const {
        label = 'Dropdown Label',
        options = [],
        value, 
        setValue,
        labelField = 'label',
        valueField = 'value',
    } = props;

    const [isFocus, setIsFocus] = useState(false);

    const renderLabel = () => {
        if (value || isFocus) {
            return (
                <Text style={[styles.label, isFocus && { color: 'blue' }]}>
                    {label}
                </Text>
            );
        }
        return null;
    };

    const getPosition = (item) => {
        if (item.value === options[0].value) {
            return 'top';
        }
        if (item.value === options[options.length - 1].value) {
            return 'bot';
        }
        return 'mid';
    };

    return (
        <View style={styles.container}>
            {renderLabel()}
            <NpmDropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                containerStyle={styles.listContainer}
                placeholderStyle={styles.placeholder}
                selectedTextStyle={styles.selectedText(isFocus)}
                itemTextStyle={styles.itemText}
                data={options}
                placeholder={!isFocus ? label : '...'}
                labelField={labelField}
                valueField={valueField}
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                    setValue(item.value);
                    setIsFocus(false);
                }}
                activeColor='transparent'
                maxHeight={300}
                renderLeftIcon={() => (
                    <MaterialIcons
                        style={styles.dropDownIcon}
                        color={isFocus ? 'blue' : 'gray'}
                        name="airplanemode-active"
                        size={25}
                    />
                )}
                renderItem={(item) => (
                    <View style={styles.itemContainer(getPosition(item))}>
                        <View style={{ width: 14 }}>
                            {(item.value === value) && <Entypo
                                name="check" size={16} color="black"
                            />}
                        </View>
                        <Text style={styles.itemText(item.value === value)} numberOfLines={1}>
                            {item.label}
                        </Text>
                    </View>
                )}
            />
        </View>
    );
}

export default Dropdown;

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginTop: 8,
        width: '50%',
    },
    listContainer: {
        borderRadius: 20,
        marginTop: 5,
        borderWidth: 0,
        backgroundColor: 'lightgray',
    },
    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 50,
        paddingHorizontal: 8,
    },
    dropDownIcon: {
        marginRight: 5,
        marginLeft: 3,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 30,
        top: 2,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 12,
        color: 'gray',
    },
    placeholder: {
        fontSize: 12,
    },
    selectedText: (isOpen) => ({
        fontSize: 12,
        color: isOpen ? 'black' : 'gray',
    }),
    itemContainer: (pos) => ({
        display: 'flex',
        flexDirection: 'row',
        columnGap: 10,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderBottomColor: 'white',
        borderBottomWidth: pos !== 'bot' ? 1 : 0,
    }),
    itemText: (selected) => ({
        fontSize: 12,
        textTransform: 'uppercase',
        color: 'black',
        fontWeight: selected ? 'bold' : 'normal',
    }),
});