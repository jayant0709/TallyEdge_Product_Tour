import SafeScreen from "@/components/SafeScreen";
import { Slot } from "expo-router";

export default function ProfileLayout() {
  return (
    <SafeScreen>
      <Slot />
    </SafeScreen>
  );
}
