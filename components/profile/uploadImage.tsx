import React, { useEffect, useState } from "react";
import { Image, View, StyleSheet, Text, Pressable } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import * as SecureStore from "expo-secure-store";
import { userService } from "@/services/users/userService";
import { helperServices } from "@/utils/helper-service";
import Toast from "react-native-toast-message";
import Feather from "@expo/vector-icons/Feather";
import * as ImageManipulator from "expo-image-manipulator";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { getUserProfile } from "@/store/auth/authSlice";

const imgDir = FileSystem.documentDirectory + "images/";

const ensureDirExists = async () => {
  const dirInfo = await FileSystem.getInfoAsync(imgDir);
  if (!dirInfo.exists) {
    await FileSystem.makeDirectoryAsync(imgDir, { intermediates: true });
  }
};

const UploadImage = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch: any = useDispatch();


  const [uploading, setUploading] = useState(false);
  const [images, setImages] = useState<any[]>([]);
  const [base64Images, setBase64Images] = useState<string>(user.profilePhoto);



  const selectImage = async (useLibrary: boolean) => {
    let result;
    const options: ImagePicker.ImagePickerOptions = {
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.75,
    };
    if (useLibrary) {
      result = await ImagePicker.launchImageLibraryAsync(options);
    } else {
      await ImagePicker.requestCameraPermissionsAsync();
      result = await ImagePicker.launchCameraAsync(options);
    }
    if (!result.canceled) {
      const manipResult = await ImageManipulator.manipulateAsync(
        result.assets[0].uri,
        [{ resize: { width: 800 } }], // Genişliği 800 piksele ayarlıyor (yükseklik orantılı olarak ayarlanır)
        { compress: 0.5, format: ImageManipulator.SaveFormat.JPEG } // Sıkıştırma oranı ve format
      );
      await saveImage(manipResult.uri);
    }
  };

  const saveImage = async (uri: string) => {
    await ensureDirExists();
    const filename = new Date().getTime() + ".jpeg";
    const dest = imgDir + filename;
    await FileSystem.copyAsync({ from: uri, to: dest });
    const base64 = await FileSystem.readAsStringAsync(dest, {
        encoding: FileSystem.EncodingType.Base64,
    });
    
    setBase64Images(base64);
    setImages([dest]);
  };

  const uploadImage = async () => {
    try {
      setUploading(true);

      const response = await userService.editProfilPhoto({
        image: base64Images,
      });

      console.log("response",response)
      if (response) {
        helperServices.checkApiResponse(
          response,
          async() => {
            Toast.show({
              type: "success",
              text1: "Başarılı",
              text2: response.message,
            });
       
          },
          () => {
            Toast.show({
              type: "error",
              text1: "Başarısız",
              text2: response.message,
            });
          }
        );
      }
    } catch (error) {
        console.log("error",error)
    } finally { 
      setUploading(false);
    }
  };

  useEffect(() => {
    if (images.length > 0) uploadImage();
  }, [images]);

  const deleteImage = async (uri: string) => {
    await FileSystem.deleteAsync(uri);
    setImages(images.filter((i) => i !== uri));
  };

  return (
    <View style={{ position: "relative" }}>
      <Image
        style={{
          width: 150,
          height: 150,
          borderWidth: 1,
          borderColor: "#2E3235",
          borderRadius: 75,
        }}
        source={{ uri: "data:image/png;base64," + base64Images }}
      />

      <Pressable
        onPress={() => selectImage(true)}
        style={{
          width: 25,
          height: 25,
          borderRadius: 25,
          backgroundColor: "#48494D",
          position: "absolute",
          bottom: 10,
          right: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Feather name="edit-2" size={14} color="#D9D9D9" />
      </Pressable>
    </View>
  );
};

export default UploadImage;

const styles = StyleSheet.create({});
