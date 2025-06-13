import { Feather, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { Tabs, useNavigation, usePathname } from "expo-router";
import type { DrawerNavigationProp } from "@react-navigation/drawer";

import {
  Image,
  StatusBar,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import { COLORS } from "../../../constants/colors";
import { styles } from "@/assets/styles/nav.styles";

export default function RootLayout() {
  const pathname = usePathname();
  const navigation =
    useNavigation<DrawerNavigationProp<Record<string, object | undefined>>>();

  const MenuButton = ({ isDashboard = false }) => (
    <TouchableOpacity
      onPress={() => {
        navigation.openDrawer();
      }}
      style={styles.menuButton}
    >
      <Feather
        name="menu"
        size={24}
        color={isDashboard ? COLORS.white : COLORS.primary}
      />
    </TouchableOpacity>
  );
  return (
    <>
      <Tabs
        initialRouteName="index"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#fff",
            height: 85,
          },
          headerTintColor: "#333",
          tabBarActiveTintColor: COLORS.primary,
          tabBarInactiveTintColor: COLORS.primary,
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 24,
          },
          tabBarStyle: {
            paddingBottom: 10,
            height: 75,
            paddingTop: 5,
          },
          tabBarLabelStyle: {
            fontWeight: "normal",
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
            headerRight: () => <MenuButton />,
            headerTitle: () => (
              <View style={styles.accountsHeader}>
                <Text style={styles.accountsTitle}>Accounts</Text>
                <Text style={{ fontSize: 15 }}>Linked Accounts (0)</Text>
              </View>
            ),
            headerStyle: {
              height: 120,
            },
            tabBarIcon: ({ focused }) => (
              <View style={styles.tabIconContainer}>
                {pathname === "/accounts" || focused ? (
                  <View style={styles.activeTabBackground}>
                    <FontAwesome5 name="university" size={20} color="#fff" />
                  </View>
                ) : (
                  <View style={styles.inactiveTabBackground}>
                    <FontAwesome5
                      name="university"
                      size={20}
                      color={COLORS.primary}
                    />
                  </View>
                )}
              </View>
            ),
            tabBarLabelStyle: {
              fontWeight: pathname === "/accounts" ? "bold" : "normal",
            },
          }}
        />
        <Tabs.Screen
          name="consents"
          options={{
            title: "Consents",
            tabBarLabel: "Consents",
            headerRight: () => <MenuButton />,
            headerTitle: "Consents",
            tabBarIcon: ({ focused }) => (
              <View style={styles.tabIconContainer}>
                {pathname === "/consents" || focused ? (
                  <View style={styles.activeTabBackground}>
                    <FontAwesome5 name="thumbs-up" size={20} color="#fff" />
                  </View>
                ) : (
                  <View style={styles.inactiveTabBackground}>
                    <FontAwesome5
                      name="thumbs-up"
                      size={20}
                      color={COLORS.primary}
                    />
                  </View>
                )}
              </View>
            ),
            tabBarLabelStyle: {
              fontWeight: pathname === "/consents" ? "bold" : "normal",
            },
          }}
        />
        <Tabs.Screen
          name="index"
          options={{
            title: "Dashboard",
            headerRight: () => <MenuButton isDashboard={true} />,
            headerStyle: {
              backgroundColor: COLORS.primary,
              height: 120,
            },
            headerTitle: () => (
              <View style={styles.headerTitleContainer}>
                <View>
                  <Image
                    source={require("@/assets/images/logo.png")}
                    style={styles.logoImage}
                  />
                </View>
                <Text style={styles.tagline}>YOUR DATA, YOUR TERMS</Text>
              </View>
            ),
            tabBarIcon: ({ focused }) => (
              <View style={styles.tabIconContainer}>
                {pathname === "/" || focused ? (
                  <View
                    style={[styles.activeTabBackground, styles.dashBoardTab]}
                  >
                    <Ionicons name="grid" size={24} color="#fff" />
                  </View>
                ) : (
                  <View
                    style={[styles.inactiveTabBackground, styles.dashBoardTab]}
                  >
                    <Ionicons
                      name="grid-outline"
                      size={24}
                      color={COLORS.primary}
                    />
                  </View>
                )}
              </View>
            ),
            tabBarLabelStyle: {
              fontWeight: pathname === "/" ? "bold" : "normal",
            },
          }}
        />
        <Tabs.Screen
          name="users"
          options={{
            title: "User Management",
            tabBarLabel: "Users",
            headerRight: () => <MenuButton />,
            headerTitle: "User Management",
            tabBarIcon: ({ focused }) => (
              <View style={styles.tabIconContainer}>
                {pathname === "/users" || focused ? (
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
                )}
              </View>
            ),
            tabBarLabelStyle: {
              fontWeight: pathname === "/users" ? "bold" : "normal",
            },
          }}
        />
        <Tabs.Screen
          name="activity"
          options={{
            title: "Activity Log",
            tabBarLabel: "Activity",
            headerRight: () => <MenuButton />,
            headerTitle: "Activity Log",
            tabBarIcon: ({ focused }) => (
              <View style={styles.tabIconContainer}>
                {pathname === "/activity" || focused ? (
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
                )}
              </View>
            ),
            tabBarLabelStyle: {
              fontWeight: pathname === "/activity" ? "bold" : "normal",
            },
          }}
        />
      </Tabs>
    </>
  );
}
