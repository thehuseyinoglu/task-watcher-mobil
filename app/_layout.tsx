import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Slot, Stack, useRouter, useSegments } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { useColorScheme } from "@/hooks/useColorScheme";
import { SafeAreaView, Text } from "react-native";
import React from "react";
import axios from "axios";
import { store } from "../store/store";
import { Provider } from "react-redux";
import * as SecureStore from "expo-secure-store";
import Toast, { BaseToast, ErrorToast } from "react-native-toast-message";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const InitialLayout = () => {
  const segments = useSegments();
  const router = useRouter();

  const isSignedIn = SecureStore.getItem("token") ? true : false;

  useEffect(() => {
    const inTabsGroup = segments[0] === "(tabs)";

    if (isSignedIn && !inTabsGroup) {
      router.replace("/");
    } else if (!isSignedIn) {
      router.replace("/login");
    }
  }, [isSignedIn]);

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="details/[id]" options={{ headerTintColor: "#602C9D" }} />
    </Stack>
  );
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const router = useRouter();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  const logout = () => {
    router.replace("/login");
  };

  // const initAxios = () => {
  //   const responseInterceptor = axios.interceptors.response.use(
  //     (response) => {
  //       if (response.data.status === 401) {
  //         logout();
  //       }
  //       return response;
  //     },
  //     (error) => {
  //       if (error.response && error.response.status === 401) {
  //         logout();
  //       }
  //       return Promise.reject(error);
  //     }
  //   );
  //   return () => {
  //     axios.interceptors.response.eject(responseInterceptor);
  //   };
  // };
  // useEffect(() => {
  //   initAxios();
  // }, []);
  const toastConfig = {
    success: (props: any) => (
      <BaseToast
        {...props}
        style={{ borderLeftColor: "purple" }}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        text1Style={{
          fontSize: 15,
          fontWeight: "400",
        }}
      />
    ),

    error: (props: any) => (
      <ErrorToast
        style={{ borderLeftColor: "red" }}
        {...props}
        text1Style={{
          fontSize: 17,
        }}
        text2Style={{
          fontSize: 15,
        }}
      />
    ),
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <BottomSheetModalProvider>
          <ThemeProvider
            value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
          >
            <SafeAreaView style={{ flex: 1 }}>
              <InitialLayout />
              <Toast config={toastConfig} />
            </SafeAreaView>
          </ThemeProvider>
        </BottomSheetModalProvider>
      </Provider>
    </GestureHandlerRootView>
  );
}
