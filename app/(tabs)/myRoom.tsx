import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { userService } from "@/services/users/userService";
import { helperServices } from "@/utils/helper-service";
import Roomcards from "@/components/myRoom/Roomcards";
import Filter from "@/components/myRoom/Filter";
import Loading from "@/components/shared/Loading";

const MyRoom = () => {
  const [loading, setLoading] = useState(false);
  const [rooms, setrooms] = useState<any>();

  const getUserRooms = async () => {
    try {
      setLoading(true);
      const response = await userService.getUserRooms();
      if (response) {
        helperServices.checkApiResponse(response, () => {
          setrooms(response.data);
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserRooms();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <Filter />
          <Roomcards rooms={rooms} />
        </ScrollView>
      )}
    </>
  );
};

export default MyRoom;

const styles = StyleSheet.create({});
