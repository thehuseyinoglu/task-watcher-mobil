import Toast from "react-native-toast-message";

const checkApiResponse = (
  data: any,
  successCallback?: ((response: any) => void) | undefined | null,
  errorCallback?: ((response: any) => void) | undefined | null
): boolean => {
  if (data.status == 200) {
    if (successCallback) successCallback(data);
    return true;
  }
  if (data.status == 422) {
    const errorKeys: any[] = Object.values(data.errors);
    const errors: string[] = [];
    for (const errorKey of errorKeys) {
      const values: any[] = Object.values(errorKey);
      for (const err of values) {
        errors.push(err);
      }
    }

    Toast.show({
      type: "error",
      text1: "Hata",
      text2: `${errors.join("<br>")}`,
    });
  } else {
    Toast.show({
      type: "error",
      text1: "Hata",
      text2: `${data.message}`,
    });
  }
  if (errorCallback) {
    errorCallback(data);
  }
  return false;
};

export const helperServices = {
  checkApiResponse,
};


