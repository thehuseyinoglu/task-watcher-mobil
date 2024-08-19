import {
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import React from "react";

interface Props {
  title: string;
  onPress: () => void;
  bgColor?: string;
  textColor?: string;
  loading?: boolean;
}

export default function CustomButton({
  title,
  onPress,
  bgColor,
  textColor,
  loading,
}: Props) {
  return (
    <TouchableOpacity
      disabled={loading}
      onPress={onPress}
      style={[styles.button, { backgroundColor: bgColor ?? "#622EA0" }]}
    >
      {loading ? (
        <ActivityIndicator size="large" color="#fff" />
      ) : (
        <Text style={[styles.title, { color: textColor ?? "white" }]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 8,
  },
  title: {
    fontWeight: 500,
    fontSize: 16,
  },
});
