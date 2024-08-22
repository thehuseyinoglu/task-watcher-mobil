import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import HomeTaskCard from "./HomeTaskCard";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const HomeTaskCards = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Oda Listesi</Text>
        <TouchableOpacity onPress={() => console.log("object")}>
          <Text style={{ color: "#622EA0" }}>Tüm Tasklarım</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.listContainer}>
        {user.tasks?.slice(0, 5).map((item: any) => (
          <HomeTaskCard key={item.id} task={item} />
        ))}
      </View>
    </View>
  );
};


export default HomeTaskCards;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginBottom: 30,
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
