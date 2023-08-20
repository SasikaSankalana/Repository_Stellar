import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface TravelCardProps {
  travelMode: string;
  price: string;
  startTime: string;
  endTime: string;
  duration: string;
}

const TravelCard: React.FC<TravelCardProps> = ({
  travelMode,
  price,
  startTime,
  endTime,
  duration,
}) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.modeText}>{travelMode}</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.priceText}>{price}</Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.startTime}>{startTime}</Text>
        </View>
        <View style={styles.column}>
          <View style={styles.durBox}>
            <Text style={styles.duration}>{duration}</Text>
          </View>
        </View>
        <View style={styles.column}>
          <Text style={styles.endTime}>{endTime}</Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.sne}>START</Text>
        </View>
        <View style={styles.column}></View>
        <View style={styles.column}>
          <Text style={styles.sne}>END</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: 320,
    padding: 15,
    height: 140,
    flexShrink: 0,
    borderRadius: 5,
    backgroundColor: "rgba(18, 17, 17, 0.46)",
  },
  modeText: {
    fontSize: 16,
    color: "white",
    fontFamily: "Inter",
    fontWeight: "700",
    textAlign: "left",
  },
  priceText: {
    fontSize: 16,
    color: "white",
    fontFamily: "Inter",
    fontWeight: "400",
    textAlign: "right",
  },
  startTime: {
    fontSize: 20,
    color: "white",
    fontFamily: "Inter",
    fontWeight: "400",
    textAlign: "left",
  },
  endTime: {
    fontSize: 20,
    color: "white",
    fontFamily: "Inter",
    fontWeight: "700",
    textAlign: "right",
  },
  duration: {
    textAlign: "center",
  },
  durBox: {
    width: 50,
    height: 24,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#FFF",
    backgroundColor: "#D9D9D9",
    alignItems: "center",
  },
  sne: {
    fontSize: 12,
    color: "rgba(255, 253, 253, 0.50)",
    fontFamily: "Inter",
    fontWeight: "700",
    textAlign: "center",
  },
  row: {
    flex: 1,
    flexDirection: "row",
  },
  column: {
    flex: 1,
    padding: 10,
  },
});

export default TravelCard;
