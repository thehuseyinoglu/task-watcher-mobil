import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Entypo from "@expo/vector-icons/Entypo";

type Props = {
  title: string;
};

const CustomChip = ({ title }: Props) => {
  return (
    <View style={styles.container}>
     <View style={{flexDirection:"row",alignItems:"center", paddingRight:4}}>
     <Entypo name="dot-single" size={14} color="#28C76F" />
      <Text style={{ color: "#28C76F", fontWeight: "400", fontSize: 14 }}>
        {title}
      </Text>
     </View>
    </View>
  );
};

export default CustomChip;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#28C76F",
    backgroundColor: "rgba(40, 199, 111, 0.1)",
    padding: 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
  },
});
