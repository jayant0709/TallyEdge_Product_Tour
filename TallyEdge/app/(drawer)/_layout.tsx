import { Drawer } from "expo-router/drawer";
import DrawerContent from "@/components/DrawerContent";
import { StatusBar } from "react-native";
import { COLORS } from "@/constants/colors";

export default function DrawerLayout() {
  return (
    <>
      <StatusBar backgroundColor={"#6a28c8"} barStyle="light-content" />
      <Drawer
        screenOptions={{
          drawerPosition: "right",
          headerShown: false,
        }}
        drawerContent={(props) => <DrawerContent {...props} />}
      />
    </>
  );
}
