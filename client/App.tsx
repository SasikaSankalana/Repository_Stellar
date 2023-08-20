import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import CustomStepper from './src/components/molecules/Stepper';
import TravelCard from './src/components/atoms/TravelCard';

const App = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4'];

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  return (
    <View style={styles.container}>
      {/* <CustomStepper
        activeStep={activeStep}
        steps={steps}
        onNext={handleNext}
        onPrev={handlePrev}
      /> */}
      <TravelCard travelMode="Bus" price="£2.40" startTime="10:00" endTime="10:30" duration="30 mins" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
