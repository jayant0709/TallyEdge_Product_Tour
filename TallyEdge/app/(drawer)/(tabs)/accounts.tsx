import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../../assets/styles/accounts.main.styles";
import { useRouter } from "expo-router";
import HighlightWrapper from "@/components/HighlightWrapper";

export default function AccountsScreen() {
  const router = useRouter();
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
      <HighlightWrapper
        tooltip={true}
        tooltipDirection="left"
        tooltipHeading="Add Your First Account"
        tooltipContent="Tap this button to start linking your bank accounts. You'll be able to discover and connect to various financial institutions."
        stepNumber={3}
        screen="/accounts"
        id="step-3"
      >
        <TouchableOpacity
          style={styles.floatingButton}
          onPress={() => router.push("/accounts/discover_accounts")}
        >
          <Ionicons name="add" size={30} color="#fff" />
        </TouchableOpacity>
      </HighlightWrapper>
    </View>
  );
}
