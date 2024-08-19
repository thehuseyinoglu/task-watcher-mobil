import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ThemedView } from "@/components/ThemedView";
import Input from "@/components/shared/Input";
import PasswordInput from "@/components/shared/PasswordInput";
import CustomButton from "@/components/shared/CustomButton";
import { ThemedText } from "@/components/ThemedText";
import { Link, useRouter } from "expo-router";
import { authService } from "@/services/auth/authService";
import { helperServices } from "@/utils/helper-service";
import Toast from "react-native-toast-message";

interface FormValues {
  name: string;
  email: string;
  password: string;
}

const Register = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const schema = yup.object().shape({
    name: yup.string().required("Bu alanı doldurmak zorunludur"),
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
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    mode: "onSubmit",
    resolver: yupResolver(schema) as any,
  });

  const onSubmit = async (value: FormValues) => {
    try {
      await register(value);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const register = async (value: FormValues) => {
    setLoading(true);

    const response = await authService.register(value);

    if (response) {
      helperServices.checkApiResponse(response, () => {
        reset();
        router.replace("/login");
        Toast.show({
          type: "success",
          text1: "Başarılı",
          text2: "Kullanıcı eklendi",
        });
      });
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
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
                Hesap Oluştur
              </ThemedText>
            </ThemedView>
            <View style={styles.field}>
              <Controller
                name="name"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Input
                    title="İsim Soyisim"
                    errors={errors?.name?.message}
                    mode="text"
                    onChangeText={onChange}
                    value={value}
                  />
                )}
              />
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
            </View>

            <CustomButton
              loading={loading}
              title="Hesap Oluştur"
              onPress={handleSubmit(onSubmit)}
            />

            <Link href="/login" asChild>
              <Pressable>
                <ThemedText
                  style={{
                    fontSize: 14,
                    color: "#622EA0",
                    textAlign: "center",
                  }}
                >
                  Geri dön
                </ThemedText>
              </Pressable>
            </Link>
          </View>
        </ImageBackground>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Register;

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
