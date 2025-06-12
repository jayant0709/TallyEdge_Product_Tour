import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import React from "react";

type Props = {
  children: React.ReactNode;
  edges?: ("top" | "bottom" | "left" | "right")[];
};

const SafeScreen = ({ children, edges = ["left", "right", "bottom"] }: Props) => {
  return (
    <SafeAreaView style={styles.container} edges={edges}>
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default SafeScreen;
