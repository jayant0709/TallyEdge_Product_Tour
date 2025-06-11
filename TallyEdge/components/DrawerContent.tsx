import {
  DrawerContentScrollView,
  DrawerContentComponentProps,
} from "@react-navigation/drawer";
import { View, Text, Image } from "react-native";
import { COLORS } from "@/constants/colors";
import { styles } from "@/assets/styles/drawer.styles";
import { Feather } from "@expo/vector-icons";

export default function DrawerContent(props: DrawerContentComponentProps) {
  return (
    <DrawerContentScrollView
      style={styles.drawerContainer}
      contentContainerStyle={{
        paddingTop: 0,
        paddingHorizontal: 0,
        margin: 0,
      }}
    >
      <View style={{ marginHorizontal: -20 }}>
        <View style={styles.drawerHeader}>
          <View style={styles.headerTop}>
            <View>
              <View style={styles.headerTitleContainer}>
                <View>
                  <Image
                    source={require("@/assets/images/logo.png")}
                    style={styles.logoImage}
                  />
                </View>
                <Text style={styles.tagline}>YOUR DATA, YOUR TERMS</Text>
              </View>
            </View>
            <View style={styles.menuButton}>
              <Feather
                name="menu"
                size={32}
                color={COLORS.white}
                onPress={() => props.navigation.closeDrawer()}
              />
            </View>
          </View>

          <View style={styles.headerMiddle}>
            <Text style={styles.headerLoginText}>Current Login</Text>
            <></>
          </View>
        </View>

        <View style={{ padding: 20 }}>
          <Text>Drawer content goes here</Text>
        </View>
      </View>
    </DrawerContentScrollView>
  );
}
