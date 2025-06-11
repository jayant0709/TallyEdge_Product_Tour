import SafeScreen from "@/components/SafeScreen";
import { Slot } from "expo-router";

export default function AccountsLayout() {
  return (
    <SafeScreen>
      <Slot />
    </SafeScreen>
  );
}
