import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const Filter = () => {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.button,
          { borderTopLeftRadius: 10, borderBottomLeftRadius: 10 },
        ]}
      >
        <AntDesign name="filter" size={24} color="#48494D" />
        <Text>Filtrele</Text>
      </View>
      <View
        style={[
          styles.button,
          { borderTopRightRadius: 10, borderBottomRightRadius: 10 },
        ]}
      >
      <MaterialIcons name="sort" size={24} color="#48494D" />
        <Text>Sırala</Text>
      </View>
    </View>
  );
};

export default Filter;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    backgroundColor:"#fff"
  },
  button: {
    flexDirection: "row",
    width: "50%",

    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#F0F4F8",
    gap:5
  },
});
