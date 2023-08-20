import * as React from "react";
import {
  StatusBar,
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  Animated,
  TouchableOpacity,
  Platform,
} from "react-native";

import { Movie, EmptyItem } from "../../../../api";

const { width, height } = Dimensions.get("window");

import Svg, { Rect } from "react-native-svg";
import { LinearGradient } from "expo-linear-gradient";

const SPACING = 10;
const ITEM_SIZE =
  Platform.OS === "ios" ? width * 0.72 * 0.5 : width * 0.74 * 0.5;
const EMPTY_ITEM_SIZE = (width - ITEM_SIZE) / 2;
const BACKDROP_HEIGHT = height;
const AnimatedSvg = Animated.createAnimatedComponent(Svg);

interface BackdropProps {
  movies: (Movie | EmptyItem)[];
  scrollX: Animated.Value;
}

const Backdrop: React.FC<BackdropProps> = ({ movies, scrollX }) => {
  return (
    <View style={{ height: BACKDROP_HEIGHT, width, position: "absolute" }}>
      <FlatList
        style={{ zIndex: -1 }}
        data={movies.reverse()}
        keyExtractor={(item) => item.key + "-backdrop"}
        removeClippedSubviews={false}
        contentContainerStyle={{ width, height: BACKDROP_HEIGHT }}
        renderItem={({ item, index }) => {
          if (!("backdrop" in item)) {
            return null; // Handle EmptyItem
          }
          const translateX = scrollX.interpolate({
            inputRange: [(index - 2) * ITEM_SIZE, (index - 1) * ITEM_SIZE],
            outputRange: [0, width],
            // extrapolate:'clamp'
          });

          const textOpacity = scrollX.interpolate({
            inputRange: [(index - 2) * ITEM_SIZE, (index - 1) * ITEM_SIZE],
            outputRange: [0, 1],
            extrapolate: "clamp",
          });

          const textTranslateX = scrollX.interpolate({
            inputRange: [(index - 2) * ITEM_SIZE, (index - 1) * ITEM_SIZE],
            outputRange: [width, 0],
            extrapolate: "clamp",
          });
          return (
            <Animated.View
              removeClippedSubviews={false}
              style={{
                position: "absolute",
                width: translateX,
                height,
                overflow: "hidden",
              }}
            >
              <Image
                source={{ uri: item.backdrop }}
                style={{
                  width,
                  height: BACKDROP_HEIGHT,
                  position: "absolute",
                }}
              />
              <LinearGradient
                colors={["rgba(0, 0, 0, 0)", "black"]}
                locations={[0, 0.5]}
                style={{
                  height: BACKDROP_HEIGHT * 0.6,
                  width,
                  position: "absolute",
                  bottom: 0,
                  zIndex: 0,
                }}
              />
              <Animated.View
                style={{
                  position: "absolute",
                  width,
                  height: BACKDROP_HEIGHT,
                  opacity: textOpacity,
                  transform: [{ translateX: textTranslateX }],
                  top: BACKDROP_HEIGHT * 0.8,
                }}
              >
                <View style={{ width: "100%", alignItems: "center" }}>
                  <Text
                    style={{
                      fontFamily: "Rollbox",
                      color: "white",
                      fontSize: 20,
                      // fontWeight: "bold",
                    }}
                  >
                    TESSSS
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      color: "white",
                      fontSize: 20,
                      fontWeight: "bold",
                    }}
                  >
                    TESSSS
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      color: "white",
                      fontSize: 20,
                      fontWeight: "bold",
                    }}
                  >
                    TESSSS
                  </Text>
                </View>
              </Animated.View>
            </Animated.View>
          );
        }}
      />
      {/* <LinearGradient
        colors={["rgba(0, 0, 0, 0)", "black"]}
        locations={[0, 0.5]}
        style={{
          height: BACKDROP_HEIGHT * 0.6,
          width,
          position: "absolute",
          bottom: 0,
          zIndex: 0,
        }}
      /> */}
    </View>
  );
};

export default Backdrop;
