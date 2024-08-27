import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Feather from "@expo/vector-icons/Feather";

type Props = {
  setListType: (value: boolean) => void;
  listType: boolean;
};

const Header = ({ listType, setListType }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Tasklarım</Text>
      {/* <View style={styles.iconContainer}>
        <Pressable style={styles.button} onPress={() => setListType(false)}>
          <Feather
            name="grid"
            size={24}
            color={`${!listType ? "#945DDD" : "#B48DE2"}`}
          />
        </Pressable>
        <Pressable style={styles.button} onPress={() => setListType(true)}>
          <Feather
            name="list"
            size={24}
            color={`${listType ? "#945DDD" : "#B48DE2"}`}
          />
        </Pressable>
      </View> */}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "500",
  },
  iconContainer: {
    flexDirection: "row",
    gap: 10,
  },
  button: {
    borderRadius: 8,
    width: 40,
    height: 40,
    backgroundColor: "#F0F4F8",
    justifyContent: "center",
    alignItems: "center",
  },
});
