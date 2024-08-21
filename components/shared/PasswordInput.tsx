import {
  InputModeOptions,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";

import { Ionicons } from "@expo/vector-icons";
import { ThemedView } from "./ThemedView";

interface Props {
  title: string;
  mode?: InputModeOptions | undefined;
  onChangeText?: ((text: string) => void) | undefined;
  value?: string | undefined;
  errors: string | undefined;
}

const PasswordInput = ({ title, onChangeText, value, errors }: Props) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleChangeVisible = () => {
    setPasswordVisible((prev) => !prev);
  };

  return (
    <>
      <ThemedView style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <TextInput
          placeholder={title}
          style={[styles.input, { borderColor: errors ? "red" : "#FEFEFE" }]}
          secureTextEntry={passwordVisible ? false : true}
          onChangeText={onChangeText}
          value={value}
        />

        <TouchableOpacity style={styles.eye} onPress={handleChangeVisible}>
          {passwordVisible ? (
            <Ionicons name="eye-outline" size={24} color="#868e96" />
          ) : (
            <Ionicons name="eye-off-outline" size={24} color="#868e96" />
          )}
        </TouchableOpacity>
      </ThemedView>
      <Text style={styles.error}>{errors}</Text>
    </>
  );
};

export default PasswordInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    width: "100%",
    justifyContent: "center",
    
    position: "relative",
    gap: 4,
    backgroundColor: "transparent",
  },
  eye: {
    position: "absolute",
    right: 12,
    top:"50%"
  },
  input: {
    fontSize: 16,
    paddingHorizontal: 16,
    paddingVertical: 18,
    borderWidth: 1,
    backgroundColor: "white",
    borderRadius: 6,
  },
  title: {
    fontSize: 14,
    color: "#004571",
  },
  error: {
    color: "red",
  },
});
