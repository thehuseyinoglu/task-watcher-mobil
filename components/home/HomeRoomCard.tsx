import { StyleSheet, Text, View } from "react-native";
import React from "react";

interface Props{
  room:any
}

const HomeRoomCard = ({room}:Props) => {

  return (
    <View style={styles.container}>
      <View style={[styles.beforeElement,{ backgroundColor: `${room?.color ? room.color:"#B153EA" }`,}]}>
        <View>
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.taskRoom}>{room.name}</Text>
          <Text style={styles.roomAdmin}>Kişi sayısı {room.users.length}</Text>
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
            <Text style={{ color:"#E0E695",fontWeight:"500" }}>Task: {room.tasks.length}</Text>
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
    backgroundColor: "#2e3234",
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
