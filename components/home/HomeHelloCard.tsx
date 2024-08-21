import { StyleSheet, Text, View } from "react-native";
import React from "react";

const HomeHelloCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title1}>Merhaba Berkay</Text>
      <Text style={styles.title2}>İşleri halletmenin tam zamanı!</Text>
    </View>
  );
};

export default HomeHelloCard;

const styles = StyleSheet.create({
  container: {
    gap: 10,
    marginBottom: 50,
    marginTop:20
  },
  title1: {
    fontSize: 16,
    fontWeight: "400",
  },
  title2: {
    fontSize: 24,
    fontWeight: "600",
  },
});
