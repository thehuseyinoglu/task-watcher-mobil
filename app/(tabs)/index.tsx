import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  RefreshControl,
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

  const dispatch:any = useDispatch();

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    dispatch(getUserProfile())
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  

   useEffect(() => {
 

dispatch(getUserProfile())


   }, []);



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
