import { StyleSheet, Text, View } from "react-native";
import React from "react";
import RoomCard from "./RoomCard";

type Props = {
  rooms: any;
};

const Roomcards = ({ rooms }: Props) => {




  return (
    <View
      style={{
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 10,
        padding: 10,
      }}
    >
      {rooms &&
        rooms.map((item: any, index: number) => (
         <RoomCard key={item.id} room={item} index={index}/>
        ))}
    </View>
  );
};

export default Roomcards;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 10,
  },
  box: {
    borderRadius: 35,
    paddingHorizontal: 20,
    paddingVertical: 30,
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
    fontSize: 20,
    fontWeight: "600",
    color:"white",
    textTransform: "uppercase"
  },
});
