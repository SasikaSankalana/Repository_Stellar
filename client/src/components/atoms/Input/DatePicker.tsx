import React from "react";
import { View, Text } from "react-native";
import { en, registerTranslation } from "react-native-paper-dates";
registerTranslation("en", en);
import { DatePickerInput } from "react-native-paper-dates";

export default function DatePicker() {
  const [inputDate, setInputDate] = React.useState<Date | undefined>(undefined);

  return (
    <DatePickerInput
      locale="en"
      label="Birthdate"
      value={inputDate}
      onChange={(d) => setInputDate(d)}
      inputMode="start"
      style={{ width: "100%" }}
    />
  );
}
