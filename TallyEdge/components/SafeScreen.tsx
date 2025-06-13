import React from "react";
import { View, StatusBar, StyleSheet } from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { COLORS } from "@/constants/colors";

type Props = {
  children: React.ReactNode;
  edges?: ("bottom" | "left" | "right")[]; 
};

const SafeScreen = ({
  children,
  edges = ["left", "right", "bottom"],
}: Props) => {
  const insets = useSafeAreaInsets();

  return (
    <>
      <View style={{ height: insets.top, backgroundColor: COLORS.primary }} />
      <SafeAreaView style={styles.container} edges={edges}>
        {children}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default SafeScreen;
