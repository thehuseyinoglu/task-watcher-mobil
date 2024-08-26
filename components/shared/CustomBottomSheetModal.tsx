import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { forwardRef, useMemo } from "react";
import {
  BottomSheetModal,
  BottomSheetScrollView,
  useBottomSheetModal,
} from "@gorhom/bottom-sheet";
import AntDesign from "@expo/vector-icons/AntDesign";

interface Props {
  title: string;
  snapPoints: string[];
  children?: React.ReactNode;
}

export type Ref = BottomSheetModal;

const CustomBottomSheetModal = forwardRef<Ref, Props>((props, ref) => {
  const snapPoints = useMemo(() => props.snapPoints, []);

  const { dismiss } = useBottomSheetModal();

  return (
    <BottomSheetModal
      style={styles.shadow}
      ref={ref}
      index={0}
      snapPoints={snapPoints}
    >
      <BottomSheetScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.header}>
          <Text style={styles.containerHeadline}>{props.title}</Text>
          <TouchableOpacity disabled={false} onPress={() => dismiss()}>
            <AntDesign name="close" size={28} color="#602C9D" />
          </TouchableOpacity>
        </View>
        <View style={styles.hr}></View>
        <BottomSheetScrollView>{props.children}</BottomSheetScrollView>
      </BottomSheetScrollView>
    </BottomSheetModal>
  );
});

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,

    padding: 10,
  },
  header: {
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },

  containerHeadline: {
    fontSize: 20,
    fontWeight: "500",
    padding: 10,
    color: "#602C9D",
  },
  hr: {
    marginTop: 12,
    marginBottom: 15,
    width: "90%",
    borderWidth: 0.5,
    borderColor: "#F0F4F8",
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
});
export default CustomBottomSheetModal;
