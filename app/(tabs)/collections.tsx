import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Header from "@/components/collections/Header";
import { CollectionsEnum } from "@/types/enums";
import MyTasks from "@/components/collections/MyTasks";
import MyRooms from "@/components/collections/MyRooms";

const Collections = () => {
  const [choseTab, setChoseTab] = useState<string>(CollectionsEnum.tasks);

  return (
    <View>
      <Header setChoseTab={setChoseTab} />
      {choseTab == CollectionsEnum.tasks ? <MyTasks /> : <MyRooms />}
    </View>
  );
};

export default Collections;

const styles = StyleSheet.create({});
