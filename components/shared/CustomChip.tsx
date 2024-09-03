import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Entypo from "@expo/vector-icons/Entypo";

type Props = {
  title: string;
  color:string
};

const CustomChip = ({ title,color }: Props) => {
  return (
    <View style={[styles.container,{ backgroundColor: `${color}`,}]}>
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
    padding: 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
  },
});
// ff2d55