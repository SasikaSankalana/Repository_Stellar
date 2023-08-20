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

import { getMovies, Movie, EmptyItem } from "../../api";

const { width, height } = Dimensions.get("window");

import Svg, { Rect } from "react-native-svg";
import { LinearGradient } from "expo-linear-gradient";

import Loading from "../components/molecules/Backdrop/Loading";
import Backdrop from "../components/molecules/Backdrop/Backdrop";
import TopBar from "../components/molecules/TopBar/TopBar";

const SPACING = 10;
const ITEM_SIZE =
  Platform.OS === "ios" ? width * 0.72 * 0.5 : width * 0.74 * 0.5;
const EMPTY_ITEM_SIZE = (width - ITEM_SIZE) / 2;
const BACKDROP_HEIGHT = height;
const AnimatedSvg = Animated.createAnimatedComponent(Svg);

const LandingPage: React.FC = () => {
  const [movies, setMovies] = React.useState<(EmptyItem | Movie)[]>([]);
  const scrollX = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    const fetchData = async () => {
      const moviesData = await getMovies();
      setMovies([
        { key: "empty-left" } as EmptyItem,
        ...moviesData,
        { key: "empty-right" } as EmptyItem,
      ]);
    };

    if (movies.length === 0) {
      fetchData();
    }
  }, [movies]);

  if (movies.length === 0) {
    return <Loading />;
  }

  return (
    <View style={{ height: "100%", backgroundColor: "black" }}>
      <TopBar />
      <Backdrop movies={movies} scrollX={scrollX} />
      {/* <StatusBar /> */}
      <Animated.FlatList
        showsHorizontalScrollIndicator={false}
        data={movies}
        // keyExtractor={(item) => item.key}
        horizontal
        bounces={false}
        decelerationRate={Platform.OS === "ios" ? 0 : 0.98}
        renderToHardwareTextureAndroid
        contentContainerStyle={{ alignItems: "center" }}
        snapToInterval={ITEM_SIZE}
        snapToAlignment="start"
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
        renderItem={({ item, index }) => {
          if (!("backdrop" in item)) {
            return <View style={{ width: EMPTY_ITEM_SIZE }} />; // Handle EmptyItem
          }

          const inputRange = [
            (index - 2) * ITEM_SIZE,
            (index - 1) * ITEM_SIZE,
            index * ITEM_SIZE,
          ];

          const translateY = scrollX.interpolate({
            inputRange,
            outputRange: [150, 50, 150],
            extrapolate: "clamp",
          });

          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [1, 1.35, 1],
            extrapolate: "clamp",
          });

          return (
            <View style={{ width: ITEM_SIZE }}>
              <Animated.View
                style={{
                  marginHorizontal: SPACING,
                  alignItems: "center",
                  transform: [{ translateY }, { scale }],
                  backgroundColor: "black",
                  borderRadius: ITEM_SIZE,
                  width: ITEM_SIZE * 0.75,
                  height: ITEM_SIZE * 0.75,
                }}
              >
                <Image
                  source={{ uri: item.poster }}
                  style={{
                    width: ITEM_SIZE * 0.75,
                    height: ITEM_SIZE * 0.75,
                    resizeMode: "cover",
                    borderRadius: ITEM_SIZE,
                  }}
                />
              </Animated.View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default LandingPage;
