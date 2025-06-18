import HighlightOverlay from "@/components/HighlightOverlay";
import { TourProvider } from "@/context/TourContext";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function RootLayout() {
  const insets = useSafeAreaInsets();
  return (
    <>
      <GestureHandlerRootView
        style={{ flex: 1, marginBottom: insets.bottom }}
      >
        <TourProvider>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="(drawer)" />
          </Stack>
          <HighlightOverlay />
        </TourProvider>
      </GestureHandlerRootView>
    </>
  );
}
