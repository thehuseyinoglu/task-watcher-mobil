import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Pressable, View } from "react-native";
import Header from "@/components/home/Header";
import AntDesign from '@expo/vector-icons/AntDesign';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const CustomTabBarButton = ({ children, onPress }: any) => (
    <Pressable
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent",
        width: 60,
        height: 60,
        borderRadius: 99,
        borderRightWidth: 0.5,
        borderLeftWidth: 0.5,
        borderColor: "grey",
        position: "absolute",
        bottom: 80,
        right: 10,
      }}
      onPress={onPress}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: 60,
          height: 60,
          borderRadius: 35,
          backgroundColor: "#945DDD",
        }}
      >
        {children}
      </View>
    </Pressable>
  );

  return (
    <>
      <Header />

      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "#fff",
            height: 70,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Anasayfa",
            tabBarLabelStyle: {
              marginBottom: 10,
            },
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "home" : "home-outline"}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="myTask"
          options={{
            title: "Tasklarım",
            tabBarLabelStyle: {
              marginBottom: 10,
            },
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "file-tray-full" : "file-tray-full-outline"}
                color={color}
              />
            ),
          }}
        />
        {/* <Tabs.Screen
        name="createRoom"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "add" : "add-outline"}
              color={focused ? "#602C9D" : "#fff"}
              size={64}
            />
          ),
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      /> */}
        <Tabs.Screen
          name="myRoom"
          options={{
            title: "Odalar",
            tabBarLabelStyle: {
              marginBottom: 10,
            },
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "bookmark" : "bookmark-outline"}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            tabBarLabelStyle: {
              marginBottom: 10,
            },
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "person" : "person-outline"}
                color={color}
              />
            ),
          }}
        />
      </Tabs>
     
    </>
  );
}
