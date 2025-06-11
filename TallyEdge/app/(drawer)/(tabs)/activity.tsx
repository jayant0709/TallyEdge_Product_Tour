import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import styles from "../../../assets/styles/activity.styles";

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
