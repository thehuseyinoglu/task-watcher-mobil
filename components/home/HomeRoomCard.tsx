import { StyleSheet, Text, View } from "react-native";
import React from "react";

const HomeRoomCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.beforeElement}>
        <View>
          <Text style={styles.taskRoom}>Room Adı</Text>
          <Text style={styles.roomAdmin}>Kişi Sayısı</Text>
        </View>
        <View
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <View style={{ alignItems: "center", flexDirection: "row" }}>
            <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 25,
                borderColor: "#fff",
                borderWidth: 1,
                backgroundColor: "red",
              }}
            ></View>
            <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 25,
                borderColor: "#fff",
                borderWidth: 1,
                marginLeft: -25,
                backgroundColor: "red",
              }}
            ></View>
            <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 25,
                borderColor: "#fff",
                borderWidth: 1,
                marginLeft: -25,
                backgroundColor: "red",
              }}
            ></View>
          </View>
          <View style={{ flexDirection: "row"}}>
            <Text style={{ color:"#95E6AC" }}> 24 /</Text>
            <Text style={{ color:"#E0E695" }}> 45</Text>
          </View>
        </View>
      </View>
      <View style={styles.afterElement}></View>
    </View>
  );
};

export default HomeRoomCard;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: 250,
    height: 150,
  },
  beforeElement: {
    height: "100%",
    width: "100%",
    position: "absolute",
    top: 0,
    right: 0,
    zIndex: 99,
    backgroundColor: "#B153EA",
    borderRadius: 20,
    padding: 25,
    gap: 23,
  },
  afterElement: {
    height: "100%",
    width: "100%",
    position: "absolute",
    top: 10,
    right: -10,
    zIndex: 98,
    backgroundColor: "#D08EEF",
    borderRadius: 20,
  },
  taskRoom: {
    fontWeight: "600",
    fontSize: 24,
    color: "#fff",
  },
  roomAdmin: {
    fontWeight: "400",
    fontSize: 14,
    color: "#fff",
  },
});
