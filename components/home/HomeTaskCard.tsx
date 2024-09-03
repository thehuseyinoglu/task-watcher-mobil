import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import dayjs from "dayjs";
import "dayjs/locale/tr";

interface Props {
  task: any;
}

const HomeTaskCard = ({ task }: Props) => {
  dayjs.locale("tr");

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.taskContent}>
          <View style={{ gap: 8, flexDirection: "row" }}>
            <Feather
              name="check-circle"
              size={24}
              color={`${task.room.color}`}
            />
            <View style={{ gap: 2 }}>
              <Text style={styles.taskTitle}>{task.name}</Text>
              <Text style={styles.taskRoom}>{task.room?.name}</Text>
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.taskDate}>
            {dayjs(task.createdAt).format("MMM D")}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default HomeTaskCard;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fbfbfb",
    backgroundColor: "#FFF",
    shadowColor: "#5A5C60",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.1,
    shadowRadius: 9,
    elevation: 10,
  },

  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  taskContent: {
    gap: 5,
  },
  taskTitle: {
    fontWeight: "600",
    fontSize: 20,
    color: "#48494D",
  },
  taskRoom: {
    fontWeight: "400",
    fontSize: 12,
    color: "#696B70",
    opacity: 0.5,
  },
  taskDate: {
    fontWeight: "400",
    fontSize: 16,
    opacity:0.5
  },
});
