import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Image,
  Button,
  StyleSheet,
} from "react-native";

import Hamburger from "../../atoms/hamburger/Hamburger";

const TopBar: React.FC = () => {
  return (
    <View style={styles.logo}>
      <Hamburger />
      <Image
        source={require("../../../assets/images/logo.png")}
        resizeMode="contain"
      />
      <Hamburger />
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  logo: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 25,
    justifyContent: "space-between",
  },
});
