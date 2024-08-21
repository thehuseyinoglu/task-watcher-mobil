import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import HomeTaskCard from "./HomeTaskCard";

const HomeTaskCards = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Oda Listesi</Text>
        <TouchableOpacity onPress={() => console.log("object")}>
          <Text style={{ color: "#622EA0" }}>Tüm Tasklarım</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.listContainer}>
        <HomeTaskCard />
        <HomeTaskCard />
        <HomeTaskCard />
        <HomeTaskCard />
      </View>
    </View>
  );
};

export default HomeTaskCards;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginBottom:30
  },
  listContainer: {
    gap: 10,
    flexDirection: "column",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
});
