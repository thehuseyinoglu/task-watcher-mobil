import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ThemedView } from "@/components/ThemedView";
import Input from "@/components/shared/Input";
import PasswordInput from "@/components/shared/PasswordInput";
import CustomButton from "@/components/shared/CustomButton";
import { ThemedText } from "@/components/ThemedText";

interface FormValues {
  email: string;
  password: string;
}

const Login = () => {
  const schema = yup.object().shape({
    email: yup.string().required("Bu alanı doldurmak zorunludur"),
    password: yup.string().required("bu alanı doldurmak zorunludur"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    mode: "onSubmit",
    resolver: yupResolver(schema) as any,
  });

  const onSubmit = (value: FormValues) => {
    console.log(value);
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

          <CustomButton title="Giriş Yap" onPress={handleSubmit(onSubmit)} />

          <TouchableOpacity onPress={() => console.log("object")}>
            <ThemedText
              style={{ fontSize: 14, color: "#622EA0", textAlign: "center" }}
            >
              Hesap oluştur
            </ThemedText>
          </TouchableOpacity>
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
