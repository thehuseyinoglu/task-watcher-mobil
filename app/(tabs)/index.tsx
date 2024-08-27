import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  RefreshControl,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";

import HomeHelloCard from "@/components/home/HomeHelloCard";
import HomeTaskCards from "@/components/home/HomeTaskCards";
import HomeRoomCards from "@/components/home/HomeRoomCards";
import { userService } from "@/services/users/userService";
import { useDispatch } from "react-redux";
import { helperServices } from "@/utils/helper-service";
import { getUserProfile, setUser } from "@/store/auth/authSlice";

const HomeScreen = () => {
  const [refreshing, setRefreshing] = useState(false);

  const dispatch: any = useDispatch();

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    dispatch(getUserProfile());
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  useEffect(() => {
    dispatch(getUserProfile());
  }, []);

  const CustomTabBarButton = ({ children, onPress }: any) => (
    <Pressable
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent",
        width: 50,
        height: 50,
        borderRadius: 99,
        borderRightWidth: 0.5,
        borderLeftWidth: 0.5,
        borderColor: "grey",
        position: "absolute",
      }}
      onPress={onPress}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: 50,
          height: 50,
          borderRadius: 35,
          backgroundColor: "#945DDD",
        }}
      >
        {children}
      </View>
    </Pressable>
  );

  return (
    <ScrollView
      style={{ padding: 10 }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <HomeHelloCard />
      <HomeRoomCards />
      <HomeTaskCards />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
