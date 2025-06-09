import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

export default function ActivityScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentWrapper}>
        <ScrollView
          style={styles.logContainer}
          contentContainerStyle={styles.scrollContent}
        >
          <View style={styles.logItem}>
            <View style={styles.userAvatar}>
              <Text style={styles.userInitial}>J</Text>
            </View>
            <View style={styles.logContent}>
              <Text style={styles.userName}>Jayant Patil</Text>
              <Text style={styles.logAction}>Registered successfully</Text>
              <View style={styles.logDivider} />
              <Text style={styles.logType}>Registration</Text>
              <Text style={styles.logTimestamp}>20 May 2025, 4:32:26 PM</Text>
            </View>
          </View>
        </ScrollView>
      </View>
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
    backgroundColor: "#f5f7fa",
  },
  logContainer: {
    width: "100%",
    maxWidth: 800,
    padding: 24,
  },
  scrollContent: {
    paddingBottom: 24,
  },
  logItem: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
    flexDirection: "row",
    marginTop: 16,
  },
  userAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#7d3fe3",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
  },
  userInitial: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
  logContent: {
    flex: 1,
    paddingVertical: 2,
  },
  userName: {
    fontSize: 15,
    fontWeight: "600",
    color: "#222",
    marginBottom: 6,
  },
  logAction: {
    fontSize: 14,
    color: "#555",
    marginBottom: 14,
  },
  logDivider: {
    height: 1,
    backgroundColor: "#eee",
    marginVertical: 10,
  },
  logType: {
    fontSize: 14,
    color: "#666",
  },
  logTimestamp: {
    fontSize: 14,
    color: "#666",
  },
});
