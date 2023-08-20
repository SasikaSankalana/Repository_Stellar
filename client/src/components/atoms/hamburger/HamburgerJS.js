import React, { useState } from 'react'
import { View, TouchableOpacity, Image, Button } from 'react-native'

import { icons } from '../../constants'
import OverlayMenu from '../menu/OverlayMenu';

const Hamburger = ({ handlePress }) => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const openMenu = () => {
        setIsMenuVisible(true);
    };

    const closeMenu = () => {
        setIsMenuVisible(false);
    };

    return (
        <View>
            <TouchableOpacity
                onPress={openMenu}
                style={{
                    width: 40,
                    height: 40,
                    backgroundColor: 'rgba(73, 74, 79, 0.8)',
                    borderRadius: 50,
                }}
            >
                <Image
                    source={icons.minus}
                    resizeMode='cover'
                    style={{
                        width: "100%",
                        height: "100%",
                    }}
                />
                <OverlayMenu isVisible={isMenuVisible} onClose={closeMenu} />
            </TouchableOpacity>
        </View>
    )
}

export default Hamburger