import {
  DrawerContentScrollView,
  DrawerContentComponentProps,
} from "@react-navigation/drawer";
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { COLORS } from "@/constants/colors";
import { styles } from "@/assets/styles/drawer.styles";
import { Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";
import DropDownPicker from "react-native-dropdown-picker";
import { useState } from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import * as Clipboard from "expo-clipboard";
import { Snackbar } from "react-native-paper";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";
import { useTour } from "@/context/TourContext";

export default function DrawerContent(props: DrawerContentComponentProps) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("Deepak");
  const [items, setItems] = useState([{ label: "Deepak", value: "deepak" }]);
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);
  const { showIntroModal } = useTour();

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync("7670903855@tallyedge");
    setVisible(true);
  };

  const router = useRouter();
  return (
    <>
      <DrawerContentScrollView
        style={styles.drawerContainer}
        contentContainerStyle={{
          paddingTop: 0,
          paddingHorizontal: 0,
          margin: 0,
        }}
      >
        <View style={{ position: "absolute", top: 20, left: 0, right: 0 }}>
          <Snackbar
            visible={visible}
            onDismiss={() => setVisible(false)}
            duration={2000}
            style={{
              backgroundColor: "lightgreen",
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 1000,
            }}
          >
            Copied to clipboard
          </Snackbar>
        </View>
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

              <View style={[styles.dropdownContainer, { zIndex: 1000 }]}>
                <DropDownPicker
                  open={open}
                  value={value}
                  items={items}
                  setOpen={setOpen}
                  setValue={setValue}
                  setItems={setItems}
                  listMode="SCROLLVIEW" // Pushes content
                  loading={loading}
                  maxHeight={200}
                  placeholder={value}
                  style={styles.dropdown}
                  textStyle={{
                    color: COLORS.text,
                    fontSize: 14,
                    fontWeight: "500",
                  }}
                  containerStyle={styles.container}
                  dropDownContainerStyle={styles.dropDownContainer}
                  ActivityIndicatorComponent={({ color, size }) => (
                    <ActivityIndicator color={color} size={size} />
                  )}
                  activityIndicatorSize={30}
                />
              </View>
            </View>

            <View style={[styles.headerBottom, { paddingTop: 30 }]}>
              <Text style={{ color: COLORS.white }}>
                VUA: 7670903855@tallyedge
              </Text>
              <TouchableOpacity onPress={() => copyToClipboard()}>
                <MaterialCommunityIcons
                  name="content-copy"
                  size={24}
                  color={COLORS.white}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.contentContainer}>
            <Pressable
              style={styles.item}
              onPress={() => router.push("/profile/profile")}
            >
              <View style={styles.itemIconAndTitle}>
                <AntDesign name="user" size={24} color={COLORS.primary} />
                <Text style={styles.itemText}>Profile</Text>
              </View>
              <View>
                <AntDesign name="right" size={20} color={COLORS.primary} />
              </View>
            </Pressable>
            <Pressable style={styles.item} onPress={() => {}}>
              <View style={styles.itemIconAndTitle}>
                <Ionicons
                  name="document-text-outline"
                  size={24}
                  color={COLORS.primary}
                />
                <Text style={styles.itemText}>Help & Policies</Text>
              </View>
              <View>
                <AntDesign name="right" size={20} color={COLORS.primary} />
              </View>
            </Pressable>
            <Pressable style={styles.item} onPress={() => {
              showIntroModal();
              props.navigation.closeDrawer();
            }}>
              <View style={styles.itemIconAndTitle}>
                <Text style={styles.itemText}>Retake tour</Text>
              </View>
            </Pressable>
            <Pressable style={styles.item} onPress={() => router.push("/")}>
              <View style={styles.itemIconAndTitle}>
                <MaterialIcons name="logout" size={24} color={COLORS.primary} />
                <Text style={styles.itemText}>Logout</Text>
              </View>
            </Pressable>
          </View>

          <View style={styles.footer}>
            <Text style={styles.footerText}>ABOUT TALLYEDGE</Text>
            <Text style={styles.footerText}>BLOG</Text>
          </View>
        </View>
      </DrawerContentScrollView>
    </>
  );
}
