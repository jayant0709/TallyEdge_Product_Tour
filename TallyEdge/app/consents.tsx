import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function ConsentsScreen() {
  const [activeTab, setActiveTab] = useState("SELF");
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === "SELF" && styles.activeTab]}
          onPress={() => setActiveTab("SELF")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "SELF" && styles.activeTabText,
            ]}
          >
            SELF
          </Text>
          {activeTab === "SELF" && <View style={styles.activeTabIndicator} />}
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === "FINANCIAL_INSTITUTIONS" && styles.activeTab,
          ]}
          onPress={() => setActiveTab("FINANCIAL_INSTITUTIONS")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "FINANCIAL_INSTITUTIONS" && styles.activeTabText,
            ]}
          >
            FINANCIAL INSTITUTIONS
          </Text>
          {activeTab === "FINANCIAL_INSTITUTIONS" && (
            <View style={styles.activeTabIndicator} />
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, activeTab === "SUMMARY" && styles.activeTab]}
          onPress={() => setActiveTab("SUMMARY")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "SUMMARY" && styles.activeTabText,
            ]}
          >
            SUMMARY
          </Text>
          {activeTab === "SUMMARY" && (
            <View style={styles.activeTabIndicator} />
          )}
        </TouchableOpacity>
      </View>

      <View style={styles.contentWrapper}>
        <View style={styles.contentContainer}>
          {activeTab === "SELF" && (
            <View style={styles.emptyState}>
              <Text style={styles.emptyStateTitle}>No Consents Created</Text>
              <Text style={styles.emptyStateSubtitle}>
                Tap + button to create self consent
              </Text>
            </View>
          )}

          {activeTab === "FINANCIAL_INSTITUTIONS" && (
            <View style={styles.emptyState}>
              <Text style={styles.emptyStateTitle}>
                No Financial Institution Consents
              </Text>
              <Text style={styles.emptyStateSubtitle}>
                Consents from financial institutions will appear here
              </Text>
            </View>
          )}

          {activeTab === "SUMMARY" && (
            <View style={styles.emptyState}>
              <Text style={styles.emptyStateTitle}>No Consents Summary</Text>
              <Text style={styles.emptyStateSubtitle}>
                A summary of all consents will appear here
              </Text>
            </View>
          )}
        </View>
      </View>

      <TouchableOpacity style={styles.floatingButton}>
        <Ionicons name="add" size={30} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f7fa",
  },
  tabContainer: {
    flexDirection: "row",
    backgroundColor: "#6E31DC",
    paddingTop: 15,
  },
  tab: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 10,
  },
  activeTab: {
    borderBottomColor: "#fff",
  },
  tabText: {
    color: "rgba(255, 255, 255, 0.7)",
    fontWeight: "500",
    fontSize: 12,
  },
  activeTabText: {
    color: "#fff",
    fontWeight: "bold",
  },
  activeTabIndicator: {
    height: 3,
    backgroundColor: "#fff",
    width: "80%",
    position: "absolute",
    bottom: 0,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
  },
  contentWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  contentContainer: {
    flex: 1,
    width: "100%",
    maxWidth: 600,
  },
  emptyState: {
    flex: 1,
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
