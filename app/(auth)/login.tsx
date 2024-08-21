import {
  Button,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ThemedView } from "@/components/shared/ThemedView";
import Input from "@/components/shared/Input";
import PasswordInput from "@/components/shared/PasswordInput";
import CustomButton from "@/components/shared/CustomButton";
import { ThemedText } from "@/components/shared/ThemedText";
import { Link, useRouter } from "expo-router";
import Toast from "react-native-toast-message";
import { authService } from "@/services/auth/authService";
import { helperServices } from "@/utils/helper-service";
import * as SecureStore from "expo-secure-store";
import { useDispatch } from "react-redux";
import { setToken } from "@/store/auth/authSlice";

interface FormValues {
  email: string;
  password: string;
}

const Login = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const router = useRouter();

  async function saveToken(token: string) {
    await SecureStore.setItemAsync("token", token);
  }

 
 

  const schema = yup.object().shape({
    email: yup
      .string()
      .required("Bu alanı doldurmak zorunludur")
      .email("Geçerli bir e-posta giriniz")
      .matches(/^(?![\s-])/, "Baştan boşluk bırakmayınız")
      .matches(/\S+$/, "Sondan boşluk bırakmayınız"),
    password: yup
      .string()
      .required("Bu alanı doldurmak zorunludur")
      .matches(/^(?![\s-])/, "Baştan boşluk bırakmayınız")
      .matches(/\S+$/, "Sondan boşluk bırakmayınız"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    mode: "onSubmit",
    resolver: yupResolver(schema) as any,
  });

  const onSubmit = async (value: FormValues) => {
    try {
      await login(value);
    } catch (error) {
      console.log("login", error);
    } finally {
      setLoading(false);
    }
  };

  const login = async (value: FormValues) => {
    setLoading(true);
    const response = await authService.login(value);
    if (response) {
      helperServices.checkApiResponse(response, () => {
        saveToken(response.data.token);
        dispatch(setToken(response.data.token));
        Toast.show({
          type: "success",
          text1: "Başarılı",
          text2: "Giriş yapılıyor",
        });
         router.replace("/");
      });
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ImageBackground
        source={require("../../assets/images/auth-background.png")}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.container}>
          <View style={styles.logo}>
            <Image
              style={{ width: 300, height: 110 }}
              source={require("../../assets/images/logo.png")}
            />
          </View>
          <ThemedView style={styles.textContainer}>
            <ThemedText
              style={{ fontSize: 20, color: "#03304D", fontWeight: 500 }}
            >
              Giriş Yap
            </ThemedText>
          </ThemedView>
          <View style={styles.field}>
            <Controller
              name="email"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  title="E-Posta Adresi"
                  errors={errors?.email?.message}
                  mode="email"
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />

            <Controller
              name="password"
              control={control}
              render={({ field: { onChange, value } }) => (
                <PasswordInput
                  errors={errors?.password?.message}
                  title="Şifre"
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
            <TouchableOpacity onPress={() => console.log("object")}>
              <Text style={{ color: "#622EA0" }}>Şifremi Unuttum</Text>
            </TouchableOpacity>
          </View>

          <CustomButton
            loading={loading}
            title="Giriş Yap"
            onPress={handleSubmit(onSubmit)}
          />

          <Link href="/register" asChild>
            <Pressable>
              <ThemedText
                style={{ fontSize: 14, color: "#622EA0", textAlign: "center" }}
              >
                Hesap oluştur
              </ThemedText>
            </Pressable>
          </Link>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default Login;
const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 18,
    padding: 10,
  },
  field: {
    width: "100%",
    alignItems: "flex-end",
    gap: 1,
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  logo: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
