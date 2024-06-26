import React, { useState, useRef } from "react";
import { View, TextInput, StyleSheet } from "react-native";

export const PinInputs = () => {
  const [pin, setPin] = useState(["", "", "", "", "", ""]);
  const inputs = useRef<TextInput[]>([]);

  const handleChange = (text: string, index: number) => {
    const newPin = [...pin];
    newPin[index] = text;
    setPin(newPin);

    if (text && index < 5) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyPress = (key: string, index: number) => {
    if (key === "Backspace" && index > 0) {
      setPin((prev) => {
        const newPin = [...prev];
        newPin[index] = "";
        return newPin;
      });
      inputs.current[index - 1].focus();
    }
  };

  return (
    <View style={styles.container}>
      {pin.map((item, index) => (
        <TextInput
          key={index}
          ref={(ref) => {
            if (ref) {
              inputs.current[index] = ref;
            }
          }}
          style={styles.input}
          onChangeText={(text) => handleChange(text, index)}
          onKeyPress={(e) => handleKeyPress(e.nativeEvent.key, index)}
          value={item}
          keyboardType="numeric"
          maxLength={1}
          autoFocus={index === 0}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 5,
    width: 40,
    height: 40,
    textAlign: "center",
    fontSize: 18,
  },
});
