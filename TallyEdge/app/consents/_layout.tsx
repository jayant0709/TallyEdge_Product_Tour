import SafeScreen from "@/components/SafeScreen";
import { Slot } from "expo-router";

export default function ConsentsLayout() {
  return (
    <SafeScreen>
      <Slot />
    </SafeScreen>
  );
}
