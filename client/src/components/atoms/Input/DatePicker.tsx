import React from "react";
import { View, Text } from "react-native";
import { DatePickerInput } from "react-native-paper-dates";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function DatePicker() {
  const [inputDate, setInputDate] = React.useState<Date | undefined>(undefined);

  return (
    <SafeAreaProvider style={{ width: "100%" }}>
      <View
        style={{
          justifyContent: "center",
          flex: 1,
          alignItems: "center",
          backgroundColor: "black",
          width: "100%",
        }}
      >
        <DatePickerInput
          locale="en"
          label="Birthdate"
          value={inputDate}
          onChange={(d) => setInputDate(d)}
          inputMode="start"
          style={{ width: "100%" }}
        />
      </View>
    </SafeAreaProvider>
  );
}
