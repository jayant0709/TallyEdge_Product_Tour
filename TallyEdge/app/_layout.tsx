import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { Tabs, usePathname } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function RootLayout() {
  const pathname = usePathname();

  const MenuButton = ({ isDashboard = false }) => (
    <View style={styles.menuButton}>
      <View
        style={[
          styles.menuLine,
          isDashboard ? styles.whiteMenuLine : styles.darkMenuLine,
        ]}
      ></View>
      <View
        style={[
          styles.menuLine,
          isDashboard ? styles.whiteMenuLine : styles.darkMenuLine,
        ]}
      ></View>
      <View
        style={[
          styles.menuLine,
          isDashboard ? styles.whiteMenuLine : styles.darkMenuLine,
        ]}
      ></View>
    </View>
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
          headerRight: () => <MenuButton isDashboard={false} />,
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
            backgroundColor: "#7d3fe3",
            height: 85,
          },
          headerTintColor: "#fff",
          headerTitle: () => (
            <View style={styles.headerTitleContainer}>
              <View>
                <Text style={styles.logoText}>Tally</Text>
                <Text style={[styles.logoText, styles.logoSubText]}>Edge</Text>
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

const styles = StyleSheet.create({
  headerTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingLeft: 10,
  },
  logo: {
    width: 28,
    height: 28,
    marginRight: 6,
  },
  logoText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
  logoSubText: {
    marginTop: -5,
  },
  tagline: {
    color: "#fff",
    fontSize: 8,
    marginLeft: 8,
    opacity: 0.8,
    letterSpacing: 0.2,
  },
  menuButton: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  menuLine: {
    width: 25,
    height: 2.5,
    marginVertical: 4,
    borderRadius: 1,
  },
  whiteMenuLine: {
    backgroundColor: "#fff",
  },
  darkMenuLine: {
    backgroundColor: "#333",
  },
  tabIconContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  activeTabBackground: {
    backgroundColor: "#6E31DC",
    borderRadius: 50,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 44,
    height: 44,
    marginBottom: 20,
  },
});
