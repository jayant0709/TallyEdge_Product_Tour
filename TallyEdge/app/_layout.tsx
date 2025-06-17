import HighlightOverlay from "@/components/HighlightOverlay";
import { HighlightProvider } from "@/context/HighlightContext";
import { TourProvider } from "@/context/TourContext";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <TourProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(drawer)" />
        </Stack>
        <HighlightOverlay />
      </TourProvider>
    </GestureHandlerRootView>
  );
}
