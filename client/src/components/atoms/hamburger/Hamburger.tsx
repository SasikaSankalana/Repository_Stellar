import React, { useState } from "react";
import { View, TouchableOpacity, Image, Button } from "react-native";

import OverlayMenu from "../menu/OverlayMenu";

const Hamburger: React.FC = () => {
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
          backgroundColor: "rgba(73, 74, 79, 0.8)",
          borderRadius: 50,
          marginLeft: 10,
        }}
      >
        <Image
          source={require("../../../assets/images/minus.png")}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </TouchableOpacity>
      {isMenuVisible && (
        <OverlayMenu isVisible={isMenuVisible} onClose={closeMenu} />
      )}
    </View>
  );
};

export default Hamburger;
