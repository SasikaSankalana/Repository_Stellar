import React from "react";
import { View, Text } from "react-native";
import { en, registerTranslation } from "react-native-paper-dates";
registerTranslation("en", en);
import { DatePickerInput } from "react-native-paper-dates";

const DatePicker = ({ setInputDatee, width }) => {
  const [inputDate, setInputDate] = React.useState<Date | undefined>(undefined);

  return (
    <DatePickerInput
      locale="en"
      label="Birthdate"
      value={inputDate}
      onChange={(d) => setInputDatee(d)}
      inputMode="start"
      style={{ width: "100%" }}
    />
  );
}

export default DatePicker;
