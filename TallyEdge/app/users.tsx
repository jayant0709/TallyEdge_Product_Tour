import { Ionicons } from "@expo/vector-icons";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function UsersScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentWrapper}>
        <View style={styles.content}>
          <View style={styles.userList}>
            <TouchableOpacity style={styles.userItem}>
              <View style={styles.userAvatar}>
                <Text style={styles.userInitial}>J</Text>
              </View>
              <View style={styles.userInfo}>
                <Text style={styles.userName}>Jayant Patil (You)</Text>
                <Text style={styles.userRole}>Admin</Text>
              </View>
              <Ionicons name="chevron-down" size={20} color="#6E31DC" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.floatingButton}>
        <Ionicons name="add" size={24} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f7fa",
  },
  contentWrapper: {
    flex: 1,
    alignItems: "center",
  },
  content: {
    width: "100%",
    maxWidth: 600,
    padding: 20,
  },
  userList: {
    backgroundColor: "#fff",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
    padding: 20,
    marginTop: 20,
  },
  userItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
  },
  userAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#6E31DC",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
  },
  userInitial: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginBottom: 4,
  },
  userRole: {
    fontSize: 14,
    color: "#666",
  },
  floatingButton: {
    position: "absolute",
    bottom: 100,
    right: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#6E31DC",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
});
