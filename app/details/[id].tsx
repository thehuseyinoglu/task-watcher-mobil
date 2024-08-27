import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack, useLocalSearchParams } from "expo-router";

const Detail = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Stack.Screen options={{ headerTitle: `Details ${id}` }} />

      <Text>My Details for {id}</Text>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({});
