import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

const Input = ({label, value, setValue}) => {
  return (
    <TextInput
      label={label}
      value={value}
      onChange={(d) => setValue(d)}
      style={{
        color: "white",
        backgroundColor: "rgba(0,0,0, 0.5)",
        borderRadius: 5,
        width: "75%",
        margin: 5,
      }}
      theme={{
        colors: {
          onSurfaceVariant: "white",
          text: "white",
          primary: "white",
          outline: "white",
        },
      }}
      underlineColor="white"
    />
  );
};

const styles = StyleSheet.create({});

export default Input;
