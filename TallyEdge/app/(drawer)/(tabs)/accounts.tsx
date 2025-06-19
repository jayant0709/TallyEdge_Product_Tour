import { Ionicons } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import { styles } from "../../../assets/styles/accounts.main.styles";
import { useRouter } from "expo-router";
import HighlightWrapper from "@/components/HighlightWrapper";
import { useTour } from "@/context/TourContext";
import { useEffect, useRef } from "react";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

export default function AccountsScreen() {
  const router = useRouter();
  const { registerHighlight, isTourActive, currentStep } = useTour();
  const floatingButtonRef = useRef<View>(null);

  const measureFloatingButton = () => {
    if (floatingButtonRef.current) {
      floatingButtonRef.current.measure(
        (
          x: number,
          y: number,
          width: number,
          height: number,
          pageX: number,
          pageY: number
        ) => {
          console.log("Dynamic floating button measurement:", {
            x,
            y,
            width,
            height,
            pageX,
            pageY,
          });

          const floatingButtonHighlight = {
            id: "step-3",
            x: pageX,
            y: pageY,
            width,
            height,
            tooltip: true,
            tooltipDirection: "top" as const,
            tooltipContent: {
              heading: "Add Your First Account",
              content:
                "Tap this button to start linking your bank accounts. You'll be able to discover and connect to various financial institutions.",
            },
            stepNumber: 3,
            screen: "/accounts",
          };

          console.log(
            "Dynamically registering floating button:",
            floatingButtonHighlight
          );
          registerHighlight(floatingButtonHighlight);
        }
      );
    }
  };

  useEffect(() => {
    if (isTourActive && currentStep === 3) {
      setTimeout(() => {
        measureFloatingButton();
      }, 100);
    }
  }, [isTourActive, currentStep]);

  const handleFloatingButtonLayout = () => {
    if (isTourActive && currentStep === 3) {
      setTimeout(() => {
        measureFloatingButton();
      }, 100);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.emptyState}>
          <Text style={styles.emptyStateTitle}>No Accounts Linked</Text>
          <Text style={styles.emptyStateSubtitle}>
            Tap + button to link your accounts
          </Text>
        </View>
      </View>

      <TouchableOpacity
        ref={floatingButtonRef}
        style={styles.floatingButton}
        onPress={() => router.push("/accounts/discover_accounts")}
        onLayout={handleFloatingButtonLayout}
      >
        <Ionicons name="add" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}
