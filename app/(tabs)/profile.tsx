import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import * as SecureStore from "expo-secure-store";
import { useRouter } from "expo-router";
import { setUser } from "@/store/auth/authSlice";

const Profile = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();
  const router = useRouter();

  const deleteItem = async (key: string) => {
    try {
      await SecureStore.deleteItemAsync(key);
      console.log("Anahtar başarıyla silindi.");
    } catch (error) {
      console.error("Anahtar silinirken bir hata oluştu:", error);
    }
  };

  const logout = () => {
    router.replace("/login");
    deleteItem("token");
    dispatch(setUser({} as any));
  };

  return (
    <View style={styles.container}>
      <View style={styles.photo}>
        <Image
          style={{ width: 150 }}
          source={require("../../assets/images/logo.png")}
        />
      </View>
      <View style={{ justifyContent: "center", gap: 4 }}>
        <Text style={styles.textBold}>{user.name.toUpperCase()}</Text>
        <Text style={styles.textLight}>{user.email}</Text>
        <Text></Text>
      </View>

      <View
        style={{
          width: "100%",
          gap: 100,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <View style={{ gap: 2 }}>
          <Text style={styles.textLight}>Oda Sayısı</Text>
          <Text style={styles.textBold}>{user.rooms?.length}</Text>
        </View>
        <View style={{ gap: 2 }}>
          <Text style={styles.textLight}>Task Sayısı</Text>
          <Text style={styles.textBold}>{user.tasks?.length}</Text>
        </View>
      </View>

      <View
        style={{
          width: "100%",
          justifyContent: "space-around",
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
          disabled={false}
          onPress={() => console.log("object")}
          style={[styles.button, { borderColor: "#49B2FE" }]}
        >
          <FontAwesome6 name="edit" size={24} color="#49B2FE" />
        </TouchableOpacity>
        <TouchableOpacity
          disabled={false}
          onPress={logout}
          style={[styles.button, { borderColor: "#FE4C49" }]}
        >
          <FontAwesome6 name="power-off" size={24} color="#FE4C49" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
  },
  photo: {
    width: 150,
    height: 150,
    borderWidth: 1,
    borderColor: "#622EA0",
    borderRadius: 75,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  textBold: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
  },
  textLight: {
    fontSize: 16,
    fontWeight: "400",
    color: "#C3C2C4",
    textAlign: "center",
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderWidth: 1,
    borderRadius: 10,
  },
});
