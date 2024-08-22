import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import HomeRoomCard from "./HomeRoomCard";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const HomeRoomCards = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  const myListEmpty = () => {
    return (
      <View style={{ alignItems: "center" }}>
        <Text>No data found</Text>
      </View>
    );
  };
  return (
    <>
      <View style={styles.header}>
        <Text>Oda Listesi</Text>
        {/* <TouchableOpacity onPress={() => console.log("object")}>
          <Text style={{ color: "#622EA0" }}>Tüm Odalar</Text>
        </TouchableOpacity> */}
      </View>
 
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        style={{ height: 160 }}
        data={user.rooms?.slice(0, 5)}
        renderItem={({ item }) => <HomeRoomCard room={item} />}
        ListEmptyComponent={myListEmpty}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </>
  );
};

export default HomeRoomCards;

const styles = StyleSheet.create({
  container: {
    gap: 15,
    flexDirection: "row",
  },
  separator:{
    width: 20
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
});
