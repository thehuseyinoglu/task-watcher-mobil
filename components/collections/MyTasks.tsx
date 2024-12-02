import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { userService } from '@/services/users/userService';
import { helperServices } from '@/utils/helper-service';

const MyTasks = () => {
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
    <View>
      <Text>MyTasks</Text>
    </View>
  )
}

export default MyTasks

const styles = StyleSheet.create({})