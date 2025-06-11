import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { Tabs, usePathname } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { COLORS } from "../constants/colors";
import { styles } from "../assets/styles/nav.styles";
import RightDrawer from "@/components/RightDrawer";

export default function RootLayout() {
  const pathname = usePathname();

  const MenuButton = ({ isDashboard = false }) => (
    <RightDrawer isDashboard={isDashboard} />
  );

  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: "#fff",
          height: 85,
        },
        headerTintColor: "#333",
        tabBarActiveTintColor: "#6E31DC",
        tabBarInactiveTintColor: "#666",
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 24,
        },
        tabBarStyle: {
          paddingBottom: 10,
          height: 75,
          paddingTop: 5,
        },
        headerTitleAlign: "left",
        headerRightContainerStyle: {
          paddingRight: 20,
        },
        headerLeftContainerStyle: {
          paddingLeft: 20,
        },
      }}
    >
      <Tabs.Screen
        name="accounts"
        options={{
          title: "Accounts",
          tabBarLabel: "Accounts",
          headerRight: () => <MenuButton />,
          headerTitle: "Accounts",
          tabBarIcon: ({ color }) => (
            <View style={styles.tabIconContainer}>
              {pathname === "/accounts" ? (
                <View style={styles.activeTabBackground}>
                  <FontAwesome5 name="university" size={20} color="#fff" />
                </View>
              ) : (
                <FontAwesome5 name="university" size={20} color={color} />
              )}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="consents"
        options={{
          title: "Consents",
          tabBarLabel: "Consents",
          headerRight: () => <MenuButton />,
          headerTitle: "Consents",
          tabBarIcon: ({ color }) => (
            <View style={styles.tabIconContainer}>
              {pathname === "/consents" ? (
                <View style={styles.activeTabBackground}>
                  <FontAwesome5 name="thumbs-up" size={20} color="#fff" />
                </View>
              ) : (
                <FontAwesome5 name="thumbs-up" size={20} color={color} />
              )}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: "Dashboard",
          tabBarLabel: "Dashboard",
          headerRight: () => <MenuButton isDashboard={true} />,
          headerStyle: {
            backgroundColor: COLORS.primary,
            height: 120,
          },
          headerTintColor: "#fff",
          headerTitle: () => (
            <View style={styles.headerTitleContainer}>
              <View>
                <Image source={require("../assets/images/logo.png")} style={styles.logoImage} />
              </View>
              <Text style={styles.tagline}>YOUR DATA, YOUR TERMS</Text>
            </View>
          ),
          tabBarIcon: ({ color }) => (
            <View style={styles.tabIconContainer}>
              {pathname === "/" ? (
                <View style={styles.activeTabBackground}>
                  <Ionicons name="grid" size={24} color="#fff" />
                </View>
              ) : (
                <Ionicons name="grid-outline" size={24} color={color} />
              )}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="users"
        options={{
          title: "User Management",
          tabBarLabel: "Users",
          headerRight: () => <MenuButton />,
          headerTitle: "User Management",
          tabBarIcon: ({ color }) => (
            <View style={styles.tabIconContainer}>
              {pathname === "/users" ? (
                <View style={styles.activeTabBackground}>
                  <Ionicons name="shield" size={24} color="#fff" />
                </View>
              ) : (
                <Ionicons name="shield-outline" size={24} color={color} />
              )}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="activity"
        options={{
          title: "Activity Log",
          tabBarLabel: "Activity",
          headerRight: () => <MenuButton />,
          headerTitle: "Activity Log",
          tabBarIcon: ({ color }) => (
            <View style={styles.tabIconContainer}>
              {pathname === "/activity" ? (
                <View style={styles.activeTabBackground}>
                  <Ionicons name="time" size={24} color="#fff" />
                </View>
              ) : (
                <Ionicons name="time-outline" size={24} color={color} />
              )}
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

