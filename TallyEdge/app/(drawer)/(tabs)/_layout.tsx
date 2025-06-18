import { Feather } from "@expo/vector-icons";
import { Tabs, useNavigation } from "expo-router";
import type { DrawerNavigationProp } from "@react-navigation/drawer";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../../../constants/colors";
import { styles } from "@/assets/styles/nav.styles";
import CustomTabBar from "@/components/CustomTabBar";

export default function RootLayout() {
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
    <Tabs
      initialRouteName="index"
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        headerStyle: {
          backgroundColor: "#fff",
          height: 85,
        },
        headerTintColor: "#333",
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 24,
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
        }}
      />
      <Tabs.Screen
        name="consents"
        options={{
          title: "Consents",
          headerRight: () => <MenuButton />,
          headerTitle: "Consents",
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
        }}
      />
      <Tabs.Screen
        name="users"
        options={{
          title: "User Management",
          headerRight: () => <MenuButton />,
          headerTitle: "User Management",
        }}
      />
      <Tabs.Screen
        name="activity"
        options={{
          title: "Activity Log",
          headerRight: () => <MenuButton />,
          headerTitle: "Activity Log",
        }}
      />
    </Tabs>
  );
}
