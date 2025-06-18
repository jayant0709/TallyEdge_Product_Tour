import { Drawer } from "expo-router/drawer";
import DrawerContent from "@/components/DrawerContent";
import { StatusBar } from "react-native";
import { PaperProvider } from "react-native-paper";

export default function DrawerLayout() {
  return (
    <PaperProvider>
      <StatusBar backgroundColor={"#6a28c8"} barStyle="light-content" />
      <Drawer
        screenOptions={{
          drawerPosition: "right",
          headerShown: false,
        }}
        drawerContent={(props) => <DrawerContent {...props} />}
      />
    </PaperProvider>
  );
}
