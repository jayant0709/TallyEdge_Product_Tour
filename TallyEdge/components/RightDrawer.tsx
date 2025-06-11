import React, { useState, useRef } from "react";
import { Text, TouchableOpacity, Animated, Dimensions, Pressable, View, StyleSheet } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { COLORS } from "../constants/colors";
import { styles } from "../assets/styles/drawer.styles";

const SCREEN_WIDTH = Dimensions.get("window").width;

export default function RightDrawer({ isDashboard = false }) {
  const [visible, setVisible] = useState(false);
  const translateX = useRef(new Animated.Value(SCREEN_WIDTH)).current;

  const openDrawer = () => {
    setVisible(true);
    Animated.timing(translateX, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const closeDrawer = () => {
    Animated.timing(translateX, {
      toValue: SCREEN_WIDTH,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setVisible(false));
  };

  return (
    <>
      <TouchableOpacity onPress={openDrawer}>
        <Feather
          name="menu"
          size={32}
          color={isDashboard ? "white" : COLORS.primary}
        />
      </TouchableOpacity>

      {visible && (
        <View style={StyleSheet.absoluteFill} pointerEvents="box-none">
          {/* Backdrop */}
          <Pressable
            onPress={closeDrawer}
            style={styles.backdrop}
          />

          {/* Drawer */}
          <Animated.View style={[styles.drawer, { transform: [{ translateX }] }]}>
            <TouchableOpacity onPress={closeDrawer} style={styles.closeBtn}>
              <Feather name="x" size={26} color="#000" />
            </TouchableOpacity>

            <Text style={styles.title}>Quick Access</Text>
            <TouchableOpacity style={styles.navItem}>
              <Text>Go to Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem}>
              <Text>Settings</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      )}
    </>
  );
}
