import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ThemedView } from "../shared/ThemedView";

import { Colors } from "@/constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image
          style={{ width: 120, height: 45 }}
          source={require("../../assets/images/logo.png")}
        />
      </View>

      <Ionicons name="notifications-outline" size={32} color="#945DDD" />
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
