import { Text, TextInput, View, StyleSheet, InputModeOptions } from "react-native";
import React from "react";
import { ThemedView } from "./ThemedView";
import { BottomSheetTextInput } from "@gorhom/bottom-sheet";


interface Props{
  title:string
  mode:InputModeOptions | undefined
  onChangeText?: ((text: string) => void) | undefined
  value?: string | undefined
  errors:string | undefined

}


const BottomSheetInput = ({title,mode,onChangeText,value,errors}:Props) => {
  return (
    <>
      <ThemedView
        style={styles.container}
      >
        <Text style={styles.title}>{title}</Text>
        <BottomSheetTextInput
          inputMode={mode ?? "text"}
          placeholder={title}
          style={[styles.input,{ borderColor: errors ? "red" : "#F0EFF1" }]}
          onChangeText={onChangeText}
          value={value}
          autoCapitalize="none"
        />
      </ThemedView>
      <Text style={styles.error}>{errors}</Text>
    </>
  );
};

export default BottomSheetInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    width: "100%",
    justifyContent: "center",
    position: "relative",
    gap: 4,
    backgroundColor:"transparent"
  },
  input: {
    fontSize: 16,
    paddingHorizontal:16 ,
    paddingVertical: 18,
    borderWidth: 1,
    backgroundColor:"white",
    borderRadius:6,
  
  },
  title: {
    fontSize: 14,
    color:"#004571"
  },
  error: {
    color: "red",
  },
});
