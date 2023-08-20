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

import DropdownInput from "../components/atoms/Input/DropDown";
import TravelCard from "../components/atoms/cards/TravelCard";
import Stepper from "../components/organisms/Stepper";
import Hamburger from "../components/atoms/hamburger/Hamburger";
import Input from "../components/atoms/Input/TextInput";
import DatePicker from "../components/atoms/Input/DatePicker";
import Dropdown from "../components/atoms/filter/FilterDropdown";

import TopBar from "../components/molecules/TopBar/TopBar";

const SearchPage: React.FC = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = ["Step 1", "Step 2", "Step 3", "Step 4"];

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };
  const data = [
    { label: "Urenus", value: "1" },
    { label: "Nepchune", value: "2" },
    { label: "Earth", value: "3" },
    { label: "Item 4", value: "4" },
    { label: "Item 5", value: "5" },
    { label: "Item 6", value: "6" },
    { label: "Item 7", value: "7" },
    { label: "Item 8", value: "8" },
  ];

  const dropDownOptions = [
    { label: "Cosmic Rift", value: "cosmic" },
    { label: "Warp Odyssey", value: "warp" },
    { label: "Stellar Sojourn", value: "stellar" },
  ];

  const [value, setValue] = React.useState<string>(dropDownOptions[0].value);

  return (
    <View style={styles.container}>
      <TopBar />
      <View>
        <View>
          <Text>BOOK A RIDE</Text>
        </View>
        <View>
          <DropdownInput
            data={data}
            labelTitle="test"
            onReturnValue={(value) => console.log(value)}
          />
          <DropdownInput
            data={data}
            labelTitle="test"
            onReturnValue={(value) => console.log(value)}
          />
          <View>
            <DatePicker />
          </View>
        </View>
      </View>
      {/* <DropdownInput
        data={data}
        labelTitle="test"
        onReturnValue={(value) => console.log(value)}
      />
      <DropdownInput
        data={data}
        labelTitle="test"
        onReturnValue={(value) => console.log(value)}
      />
      <DatePicker /> */}
      {/* <TravelCard
        travelMode="asd"
        price="sa"
        startTime=" as"
        endTime="asd"
        duration="sad"
      /> */}
      {/* <Stepper
        activeStep={activeStep}
        steps={steps}
        onNext={handleNext}
        onPrev={handlePrev}
      /> */}
      {/* <Hamburger /> */}
      {/* <Input />
      
      {/* <Dropdown options={dropDownOptions} value={value} setValue={setValue} /> */}
    </View>
  );
};

export default SearchPage;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    marginTop: 25,
  },
});
