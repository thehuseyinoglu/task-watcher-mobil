import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomChip from "../shared/CustomChip";
import Feather from "@expo/vector-icons/Feather";

import dayjs from "dayjs";
import "dayjs/locale/tr";

type Props = {
  task: any;
};

const TaskCard = ({ task }: Props) => {
  return (
    <View style={styles.container}>
      <View
        style={[styles.leftBorder, { backgroundColor: `${task.room?.color}` }]}
      ></View>
      <View style={styles.header}>
        <CustomChip color={task.room?.color} title={task.room?.name} />
        <Feather name="chevron-right" size={24} color="#48494D" />
      </View>
      <View >
        <Text
          style={{ fontSize: 20, fontWeight: "500", color: "#48494D" }}
          numberOfLines={2}
          ellipsizeMode="tail"
        >
          {task.name}
        </Text>
        <Text
          style={{ fontSize: 14, fontWeight: "400", color: "#48494D" }}
          numberOfLines={3}
          ellipsizeMode="tail"
        >
          {task.description}
        </Text>
      </View>
      <Text
        style={{ fontSize: 14, fontWeight: "400", color: "#48494D", }}
        numberOfLines={3}
        ellipsizeMode="tail"
      >
        {dayjs(task?.updatedAt).format("MMM D")}
      </Text>
    </View>
  );
};

export default TaskCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    gap: 15,
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fbfbfb",
    position: "relative",
    overflow: "hidden",
    shadowColor: "#5A5C60",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.1,
    shadowRadius: 9,
    elevation: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  leftBorder: {
    height: "150%",
    width: 10,
    position: "absolute",
    left: 0,
    zIndex: 99,
  },
});
