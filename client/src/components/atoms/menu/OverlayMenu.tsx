import React, { useState } from 'react';
import { Modal, View, Text, Image, Pressable, StyleSheet } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

interface OverlayMenuProps {
    isVisible: boolean;
    onClose: () => void;
}

const OverlayMenu: React.FC<OverlayMenuProps> = ({ isVisible, onClose }) => {
    const [hoveredItem, setHoveredItem] = useState(null);

    let logo = require('../../../assets/logo.png');

    const options = ["Home", "Book a Ride", "Travel Options", "Profile", "Contact US", "Sign Out"];

    const handlePress = (item: any) => {
        setHoveredItem(item);
        alert(`You pressed ${item}`);
    };

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={isVisible}
        >
            <View style={styles.modalContent}>
                <View style={styles.logoContainer}>
                    <View style={styles.logo}>
                        <Image
                            source={require('../../../assets/logo.png')}
                            resizeMode='contain'
                        />
                    </View>
                    <Pressable onPress={onClose}>
                        <MaterialIcons name="close" color="#fff" size={30} />
                    </Pressable>
                </View>
                
                <View style={styles.menu}>
                    {options.map((item, index) => (
                        <Text
                            key={index}
                            onPress={() => handlePress(item)}
                            style={[styles.menuItem, hoveredItem === item && styles.menuHovered]}
                        >
                            {item}
                        </Text>
                    ))}
                </View>
            </View>
        </Modal>
    );
};

export default OverlayMenu;

const styles = StyleSheet.create({
    modalContent: {
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(37, 41, 46, 0.9)',
        position: 'absolute',
        bottom: 0,
    },
    logoContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 30,
    },
    logo: {
        display: 'flex',
        flexGrow: 1,
        alignItems: 'center',
    },
    menu: {
        display: 'flex',
        flexDirection: 'column',
        paddingTop: '25%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    menuItem: {
        marginBottom: 20,
        color: '#fff',
        fontSize: 20,
        textTransform: 'uppercase',
    },
    menuHovered: {
        textDecorationLine: 'underline',
    },
});
