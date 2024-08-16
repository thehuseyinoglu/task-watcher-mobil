import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const AuthLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="login"
        options={{
            headerShown:false,
            headerTitle: "Giriş Yap",
          }}
      ></Stack.Screen>
      <Stack.Screen
        name="register"
        options={{
          headerTitle: "Create Account",
          headerShown:false,
        }}
      ></Stack.Screen>
    </Stack>
  );
};

export default AuthLayout;


