import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

const HomeTaskCard = () => {
  return (
    <View style={styles.container}>
      <Ionicons style={styles.icon} name="flower" size={120} color="#DABEFF" />

      <View style={styles.content}>
        <View style={styles.taskContent}>
          <Text style={styles.taskTitle}>Task Başlığı</Text>
          <Text style={styles.taskRoom}>Room adı</Text>
        </View>
        <View>
          <Text style={styles.taskDate}>Sep 8</Text>
        </View>
      </View>
    </View>
  );
};

export default HomeTaskCard;

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    borderRadius: 20,
    borderWidth: 1,
    borderColor:"#F0E4FF",
    position: "relative",
    backgroundColor:"#F4ECFF"
  },
  icon: {
    position: "absolute",
    left: -60,
    top: -10,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  taskContent: {
    gap: 1,
  },
  taskTitle: {
    fontWeight: "600",
    fontSize: 20,
  },
  taskRoom: {
    fontWeight: "400",
    fontSize: 16,
  },
  taskDate: {
    fontWeight: "400",
    fontSize: 16,
  },
});
