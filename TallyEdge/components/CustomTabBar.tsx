import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { usePathname } from "expo-router";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants/colors";
import { styles } from "@/assets/styles/nav.styles";
import HighlightWrapper from "@/components/HighlightWrapper";

import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";

export default function CustomTabBar({ state, navigation }: BottomTabBarProps) {
  const pathname = usePathname();

  const tabs = [
    { name: "accounts", label: "Accounts", icon: "university" },
    { name: "consents", label: "Consents", icon: "thumbs-up" },
    {
      name: "index",
      label: "Dashboard",
      icon: "grid",
      outlineIcon: "grid-outline",
    },
    {
      name: "users",
      label: "Users",
      icon: "shield",
      outlineIcon: "shield-outline",
    },
    {
      name: "activity",
      label: "Activity",
      icon: "time",
      outlineIcon: "time-outline",
    },
  ];

  const Wrapper = ({
    tab,
    children,
  }: {
    tab: any;
    children: React.ReactNode;
  }) => {
    if (tab.name === "accounts") {
      return (
        <HighlightWrapper stepNumber={1} screen="/" id="step-1b">
          {children}
        </HighlightWrapper>
      );
    }
    if (tab.name === "consents") {
      return (
        <HighlightWrapper stepNumber={2} screen="/" id="step-2b">
          {children}
        </HighlightWrapper>
      );
    }
    return <>{children}</>;
  };

  return (
    <View style={styles.customTabBarContainer}>
      {tabs.map((tab, index) => {
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: state.routes[index].key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(tab.name);
          }
        };

        const renderIcon = () => {
          if (tab.name === "index") {
            return isFocused || pathname === "/" ? (
              <View style={[styles.activeTabBackground, styles.dashBoardTab]}>
                <Ionicons name="grid" size={24} color="#fff" />
              </View>
            ) : (
              <View style={[styles.inactiveTabBackground, styles.dashBoardTab]}>
                <Ionicons
                  name="grid-outline"
                  size={24}
                  color={COLORS.primary}
                />
              </View>
            );
          }

          if (tab.name === "accounts") {
            return (
              <View
                style={
                  isFocused || pathname === "/accounts"
                    ? styles.activeTabBackground
                    : styles.inactiveTabBackground
                }
              >
                <FontAwesome5
                  name="university"
                  size={20}
                  color={
                    isFocused || pathname === "/accounts"
                      ? "#fff"
                      : COLORS.primary
                  }
                />
              </View>
            );
          }

          if (tab.name === "consents") {
            return (
              <View
                style={
                  isFocused || pathname === "/consents"
                    ? styles.activeTabBackground
                    : styles.inactiveTabBackground
                }
              >
                <FontAwesome5
                  name="thumbs-up"
                  size={20}
                  color={
                    isFocused || pathname === "/consents"
                      ? "#fff"
                      : COLORS.primary
                  }
                />
              </View>
            );
          }

          if (tab.name === "users") {
            return isFocused || pathname === "/users" ? (
              <View style={styles.activeTabBackground}>
                <Ionicons name="shield" size={24} color="#fff" />
              </View>
            ) : (
              <View style={styles.inactiveTabBackground}>
                <Ionicons
                  name="shield-outline"
                  size={24}
                  color={COLORS.primary}
                />
              </View>
            );
          }

          if (tab.name === "activity") {
            return isFocused || pathname === "/activity" ? (
              <View style={styles.activeTabBackground}>
                <Ionicons name="time" size={24} color="#fff" />
              </View>
            ) : (
              <View style={styles.inactiveTabBackground}>
                <Ionicons
                  name="time-outline"
                  size={24}
                  color={COLORS.primary}
                />
              </View>
            );
          }
        };

        return (
          <TouchableOpacity
            key={index}
            onPress={onPress}
            style={styles.tabIconContainer}
          >
            <Wrapper key={index} tab={tab}>
              {renderIcon()}
              <Text
                style={[
                  {
                    fontWeight: isFocused ? "bold" : "normal",
                  },
                  styles.tabLabel,
                  tab.name === "index" && { position: "absolute", top: 48 },
                ]}
              >
                {tab.label}
              </Text>
            </Wrapper>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
