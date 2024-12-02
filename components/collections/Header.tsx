import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { CollectionsEnum } from "@/types/enums";

type Props = {
  setChoseTab: (value: string) => void;
};

const Header = ({setChoseTab}:Props) => {
  return (
    <View style={styles.container}>
      <Pressable
      onPress={()=>{
        setChoseTab(CollectionsEnum.tasks)
      }}
        style={[
          styles.button,
          { borderTopLeftRadius: 10, borderBottomLeftRadius: 10 },
        ]}
      >
        <AntDesign name="filter" size={24} color="#48494D" />
        <Text>Tasklarım</Text>
      </Pressable>
      <Pressable
      onPress={()=>{
        setChoseTab(CollectionsEnum.rooms)
      }}
      
        style={[
          styles.button,
          { borderTopRightRadius: 10, borderBottomRightRadius: 10 },
        ]}
      >
        <MaterialIcons name="sort" size={24} color="#48494D" />
        <Text>Odalarım</Text>
      </Pressable>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#fff",
  },
  button: {
    flexDirection: "row",
    width: "50%",

    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#F0F4F8",
    gap: 5,
  },
});
