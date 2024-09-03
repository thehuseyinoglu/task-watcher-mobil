import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useSegments } from "expo-router";

const AddButton = () => {

    const segments = useSegments();

    console.log(segments);

  return (
    <View>
      <Pressable
        onPress={() => {
          console.log("object");
        }}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "#48494D" : "#2E3235",
          },
          styles.container,
        ]}
      >
   
        <MaterialIcons name="add" size={34} color="white" />
      </Pressable>
    </View>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 80,
    right: 20,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 35,
  },
});
