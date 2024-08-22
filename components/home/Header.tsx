import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";

const Header = () => {
  const router = useRouter();

  

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image
          style={{ width: 120, height: 45 }}
          source={require("../../assets/images/logo.png")}
        />
      </View>
      <TouchableOpacity onPress={()=>console.log("object")}>
        <Ionicons name="notifications-outline" size={32} color="#945DDD" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  logo: {
    justifyContent: "center",
    alignItems: "center",
  },
});
