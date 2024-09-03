import { StyleSheet, Text, View } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";

type Props = {
  room: any;
  index: number;
};

const RoomCard = ({ room, index }: Props) => {
  return (
    <View
      key={room.id}
      style={[
        styles.box,
        (index + 1) % 4 === 1 && styles.box1,
        (index + 1) % 4 === 2 && styles.box2,
        (index + 1) % 4 === 3 && styles.box3,
        (index + 1) % 4 === 0 && styles.box4,
        { backgroundColor: room.color },
      ]}
    >
      <AntDesign name="cloudo" size={40} color="white" />
      <View style={{ gap: 6 }}>
        <Text style={styles.boxTitle} numberOfLines={2} ellipsizeMode="tail">
          {room.name}
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.boxText}>{room.tasks?.length} Tasks</Text>
          <AntDesign name="arrowright" size={16} color="white" />
        </View>
      </View>
    </View>
  );
};

export default RoomCard;

const styles = StyleSheet.create({
  box: {
    borderRadius: 35,
    paddingHorizontal: 20,
    paddingVertical: 25,
    justifyContent: "space-between",
   borderWidth:1, 
   borderColor:"#f1f1f1"
  },
  box1: {
    width: "55%",
    height: 200,
  },
  box2: {
    width: "40%",
    height: 150,
  },
  box3: {
    width: "55%",
    height: 150,
  },
  box4: {
    width: "40%",
    height: 200,
    marginTop: -50,
  },
  boxTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "white",
  },
  boxText: {
    fontSize: 14,
    fontWeight: "400",
    color: "white",
  },
});
