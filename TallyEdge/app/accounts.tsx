import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function AccountsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.subHeader}>
        <Text style={styles.linkedCount}>Linked Accounts (0)</Text>
      </View>

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f7fa",
  },
  subHeader: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    backgroundColor: "#fff",
  },
  linkedCount: {
    fontSize: 16,
    color: "#666",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    maxWidth: 600,
    alignSelf: "center",
    width: "100%",
  },
  emptyState: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  emptyStateTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  emptyStateSubtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
  },
  floatingButton: {
    position: "absolute",
    right: 20,
    bottom: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#6E31DC",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
});
