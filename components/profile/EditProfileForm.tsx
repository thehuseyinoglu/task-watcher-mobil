import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm, useWatch } from "react-hook-form";
import BottomSheetInput from "../shared/BottomSheetInput";
import BottomSheetPasswordInput from "../shared/BottomSheetPasswordInput";
import CustomButton from "../shared/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { userService } from "@/services/users/userService";
import { helperServices } from "@/utils/helper-service";
import Toast from "react-native-toast-message";
import { getUserProfile } from "@/store/auth/authSlice";
import Checkbox from "expo-checkbox";

interface FormValues {
  name: string;
  email: string;
  oldPassword: string;
  newPassword: string;
  changePassword: any;
}

const EditProfileForm = () => {
  const [loading, setLoading] = useState(false);
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch: any = useDispatch();

  const schema = yup.object().shape({
    name: yup.string().required("Bu alanı doldurmak zorunludur"),
    email: yup
      .string()
      .required("Bu alanı doldurmak zorunludur")
      .email("Geçerli bir e-posta giriniz")
      .matches(/^(?![\s-])/, "Baştan boşluk bırakmayınız")
      .matches(/\S+$/, "Sondan boşluk bırakmayınız"),

    oldPassword: yup
      .string()
      .when("changePassword", (changePassword, schema) => {
        if (
          changePassword == ("true" as any) ||
          changePassword == (true as any)
        )
          return yup.string().required("Bu alanını doldurmak zorunludur.");

        return schema;
      }),
    newPassword: yup
      .string()
      .when("changePassword", (changePassword, schema) => {
        if (
          changePassword == ("true" as any) ||
          changePassword == (true as any)
        )
          return yup.string().required("Bu alanını doldurmak zorunludur.");

        return schema;
      }),
  });

  const {
    control,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm<FormValues>({
    mode: "onSubmit",
    resolver: yupResolver(schema) as any,
  });

  useWatch({ control, name: ["changePassword"] });

  const onSubmit = async (value: FormValues) => {
    editUserProfile(value);
  };

  useEffect(() => {
    reset({
      name: user.name,
      email: user.email,
      changePassword: false,
    });
  }, []);

  const editUserProfile = async (value: FormValues) => {
    try {
      setLoading(true);
      const response = await userService.editUserProfile(value);

      if (response) {
        helperServices.checkApiResponse(response, () => {
          dispatch(getUserProfile());
          Toast.show({
            type: "success",
            text1: "Başarılı",
            text2: response.message,
          });
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.contentContainer}>
      <View style={styles.field}>
        <Controller
          name="name"
          control={control}
          render={({ field: { onChange, value } }) => (
            <BottomSheetInput
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
            <BottomSheetInput
              title="E-Posta Adresi"
              errors={errors?.email?.message}
              mode="email"
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        <Controller
          name="changePassword"
          control={control}
          render={({ field: { onChange, value } }) => (
            <View
              style={{
                flexDirection: "row",
                gap: 10,
                marginBottom: 16,
                marginLeft: 10,
              }}
            >
              <Checkbox value={value} onValueChange={onChange} />
              <Text>Şifreyi yenile</Text>
            </View>
          )}
        />
        {getValues("changePassword") == true ? (
          <>
            <Controller
              name="oldPassword"
              control={control}
              render={({ field: { onChange, value } }) => (
                <BottomSheetPasswordInput
                  errors={errors?.oldPassword?.message}
                  title="Eski Şifre"
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
            <Controller
              name="newPassword"
              control={control}
              render={({ field: { onChange, value } }) => (
                <BottomSheetPasswordInput
                  errors={errors?.newPassword?.message}
                  title="Yeni Şifre"
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
          </>
        ) : null}
        <CustomButton
          loading={loading}
          title="Güncelle"
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </View>
  );
};

export default EditProfileForm;

const styles = StyleSheet.create({
  contentContainer: {
    width: "100%",
  },
  field: {
    width: "100%",
    gap: 1,
  },
});
