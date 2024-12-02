import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Loading from '../shared/Loading';
import Roomcards from './Roomcards';
import { userService } from '@/services/users/userService';
import { helperServices } from '@/utils/helper-service';

const MyRooms = () => {
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
       
              <Roomcards rooms={rooms} />
            </ScrollView>
          )}
        </>
      );
}

export default MyRooms

const styles = StyleSheet.create({})