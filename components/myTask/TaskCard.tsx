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
      <View style={styles.header}>
        <CustomChip title={task.room?.name} />
        <Feather name="chevron-right" size={24} color="black" />
      </View>
      <View style={styles.content}>
        <Text style={{fontSize:20 , fontWeight:"500",color:"#622EA0"}} numberOfLines={2} ellipsizeMode="tail">
          {task.name}
        </Text>
        <Text style={{fontSize:14 , fontWeight:"400", color:"#B48DE2"}} numberOfLines={3} ellipsizeMode="tail">
          {task.description}
        </Text>
      </View>
      <Text style={{fontSize:14 , fontWeight:"400", color:"#622EA0"}} numberOfLines={3} ellipsizeMode="tail">
           {dayjs(task?.updatedAt).format("MMM D")}
        </Text>
    </View>
  );
};

export default TaskCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F0F4F8",
    gap: 15,
    padding:20,
    borderRadius:10,
    borderWidth:1,
    borderColor:"#FEFEFE"

  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  content: {},
});
