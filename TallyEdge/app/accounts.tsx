import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../assets/styles/accounts.main.styles";

export default function AccountsScreen() {
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

      <TouchableOpacity style={styles.floatingButton}>
        <Ionicons name="add" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

