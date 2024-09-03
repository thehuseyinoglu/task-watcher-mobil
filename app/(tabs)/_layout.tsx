import { Tabs, useSegments } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Pressable, Text, View } from "react-native";
import Header from "@/components/home/Header";
import AntDesign from "@expo/vector-icons/AntDesign";
import AddButton from "@/components/home/AddButton";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const segments = useSegments();

  console.log(segments);

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
            title: "Profil",
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

      {segments.length == 1 && <AddButton />}
    </>
  );
}
