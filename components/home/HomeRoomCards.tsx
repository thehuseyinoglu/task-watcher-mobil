import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import HomeRoomCard from "./HomeRoomCard";

const HomeRoomCards = () => {
  return (
    <>
      <View style={styles.header}>
        <Text>Oda Listesi</Text>
        <TouchableOpacity onPress={() => console.log("object")}>
          <Text style={{ color: "#622EA0" }}>Tüm Odalar</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ height: 160 }}
      >
        <View style={styles.container}>
          <HomeRoomCard />
          <HomeRoomCard />
          <HomeRoomCard />
        </View>
      </ScrollView>
    </>
  );
};

export default HomeRoomCards;

const styles = StyleSheet.create({
  container: {
    gap: 15,
    flexDirection: "row",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
});
