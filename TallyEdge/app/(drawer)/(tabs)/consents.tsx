import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "../../../assets/styles/consents.styles";

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
