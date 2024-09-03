import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import Header from "@/components/myTask/Header";
import Filter from "@/components/myTask/Filter";
import TaskCard from "@/components/myTask/TaskCard";
import { userService } from "@/services/users/userService";
import { helperServices } from "@/utils/helper-service";
import Loading from "@/components/shared/Loading";

const MyTask = () => {
  const [listType, setListType] = useState(false);
  const [loading, setLoading] = useState(false);
  const [tasks, setTasks] = useState<any>();

  const myListEmpty = () => {
    return (
      <View style={{ alignItems: "center" }}>
        <Text>No data found</Text>
      </View>
    );
  };

  const getUserTasks = async () => {
    try {
      setLoading(true);
      const response = await userService.getUserTasks();
      if (response) {
        helperServices.checkApiResponse(response, () => {
          setTasks(response.data);
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserTasks();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <View style={{ padding: 15, gap: 10 }}>
          <Header listType={listType} setListType={setListType} />
          <Filter />

          <FlatList
            showsHorizontalScrollIndicator={false}
            style={{ marginBottom: 50 }}
            data={tasks}
            renderItem={({ item }) =>
              loading ? <Loading /> : <TaskCard task={item} />
            }
            ListEmptyComponent={myListEmpty}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
          />
        </View>
      )}
    </>
  );
};

export default MyTask;

const styles = StyleSheet.create({
  separator: {
    height: 20,
    width: "100%",
  },
});
