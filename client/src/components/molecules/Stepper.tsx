import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Svg, Circle } from "react-native-svg";
import Icon from "react-native-vector-icons/MaterialIcons";

interface CustomStepperProps {
  activeStep: number;
  steps: string[];
  onNext: () => void;
  onPrev: () => void;
}

const CustomStepper: React.FC<CustomStepperProps> = ({
  activeStep,
  steps,
  onNext,
  onPrev,
}) => {

    const isLastStep = activeStep === steps.length - 1;

    const handleNext = () => {
      if (isLastStep) {
        // Custom function to execute when Finish is pressed
        // You can replace this with your desired action
        console.log("Finish button pressed");
      } else {
        onNext();
      }
    };
  return (
    <View style={styles.container}>
      {/* Bar behind the top icons */}
      <View style={styles.iconsBar}>
        {steps.map((_, index) => (
          <View
            key={index}
            style={[
              styles.iconBar,
              {
                backgroundColor:
                  index <= activeStep ? "#784af4" : "transparent",
              },
            ]}
          />
        ))}
      </View>
      <View style={styles.progressBar}>
        {steps.map((step, index) => (
          <Svg key={index} height="40" width="40">
            <Circle
              cx="20"
              cy="20"
              r="15"
              fill={index === activeStep ? "#ff0000" : "#aaaaaa"} // Change the inactive color here
              stroke="#784af4"
            />
          </Svg>
        ))}
      </View>
      <View style={styles.stepLabels}>
        {steps.map((step, index) => (
          <Text
            key={index}
            style={[
              styles.stepLabel,
              { fontWeight: index === activeStep ? "bold" : "normal" },
            ]}
          >
            {step}
          </Text>
        ))}
      </View>
      <ScrollView horizontal style={styles.stepsContainer}>
        {steps.map((step, index) => (
          <View
            key={index}
            style={[
              styles.stepContainer,
              { display: index === activeStep ? "flex" : "none" },
            ]}
          >
            {/* Add your step content here */}
            <Text>Step {index + 1} Content</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.row}>
        <View style={styles.column}>
          <TouchableOpacity
            style={styles.button}
            onPress={onPrev}
            disabled={activeStep === 0}
          >
            <Text style={styles.backButtonText}>Back</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.column}></View>
        <View style={styles.column}>
          <TouchableOpacity
            style={styles.button}
            onPress={handleNext}
            disabled={activeStep === steps.length - 1}
          >
            <Text style={styles.backButtonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.buttonContainer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  iconsBar: {
        position: "absolute",
    top: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "80%",
    marginTop: 200, // Adjust this value as needed
  },
  iconBar: {

    // position: "absolute",
    top: 0,
    width: 40,
    height: 10,
    backgroundColor: "transparent",
    marginTop: 10,
    padding: 2, // Adjust this value as needed
  },
  progressBar: {
    position: "absolute",
    top: 200,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "80%",
  },
  stepLabels: {
    position: "absolute",
    top: 200,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "80%",
  },
  stepLabel: {
    fontSize: 16,
    textAlign: "center",
    width: 50,
  },
  stepsContainer: {
    width: "100%",
    height: 200, // Adjust the height as needed
  },
  stepContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "80%",
  },
  button: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 5,
  },
  backButton: {
    backgroundColor: "transparent",
    padding: 10,
    borderRadius: 5,
    marginTop: 10, // Adjust this value as needed
  },
  backButtonText: {
    fontSize: 16,
    color: "#000",
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

export default CustomStepper;
