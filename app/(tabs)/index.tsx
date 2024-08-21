import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

import HomeHelloCard from "@/components/home/HomeHelloCard";
import HomeTaskCards from "@/components/home/HomeTaskCards";
import HomeRoomCards from "@/components/home/HomeRoomCards";

const HomeScreen = () => {
  return (
    <ScrollView style={{ padding: 10 }}>
      <HomeHelloCard />
      <HomeRoomCards />
      <HomeTaskCards />
     
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
