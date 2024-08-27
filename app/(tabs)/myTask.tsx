import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import Header from "@/components/myTask/Header";
import Filter from "@/components/myTask/Filter";
import TaskCard from "@/components/myTask/TaskCard";

const MyTask = () => {
  const [listType, setListType] = useState(false);

  const user = useSelector((state: RootState) => state.auth.user);

  const myListEmpty = () => {
    return (
      <View style={{ alignItems: "center" }}>
        <Text>No data found</Text>
      </View>
    );
  };

  return (
    <View style={{ padding: 15, gap: 10 }}>
      <Header listType={listType} setListType={setListType} />
      <Filter />

      <FlatList
        showsHorizontalScrollIndicator={false}
        style={{marginBottom:80}}
        data={user.tasks}
        renderItem={({ item }) => <TaskCard task={item}/>}
        ListEmptyComponent={myListEmpty}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

export default MyTask;

const styles = StyleSheet.create({
  separator: {
    height: 20,
    width: "100%",
  },
});
