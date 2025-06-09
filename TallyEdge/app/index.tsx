import { FontAwesome5 } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.cardWrapper}>
        <View style={styles.accountsSection}>
          <View style={styles.sectionHeader}>
            <View style={styles.iconContainer}>
              <FontAwesome5
                name="university"
                size={24}
                color="#6E31DC"
                style={styles.sectionIcon}
              />
            </View>
            <View style={styles.sectionHeaderText}>
              <Text style={styles.sectionTitle}>Accounts</Text>
              <Text style={styles.sectionSubtitle}>(No Accounts linked)</Text>
            </View>
          </View>
          <Text style={styles.sectionDescription}>Add/Manage accounts</Text>
          <TouchableOpacity
            style={styles.purpleButton}
            onPress={() => router.push("/accounts")}
          >
            <Text style={styles.buttonText}>Add Account</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.cardWrapper}>
        <View style={styles.consentsSection}>
          <View style={styles.sectionHeader}>
            <View style={styles.iconContainer}>
              <FontAwesome5
                name="thumbs-up"
                size={24}
                color="#6E31DC"
                style={styles.sectionIcon}
              />
            </View>
            <Text style={styles.sectionTitle}>Consents</Text>
          </View>
          <Text style={styles.sectionDescription}>Manage consents</Text>

          <View style={styles.consentTypes}>
            <TouchableOpacity
              style={styles.consentType}
              onPress={() => router.push("/consents")}
            >
              <Text style={styles.consentTypeTitle}>Self Consents</Text>
              <Text style={styles.consentTypeDescription}>
                Create & manage your own consents
              </Text>
            </TouchableOpacity>

            <View style={styles.divider} />

            <TouchableOpacity
              style={styles.consentType}
              onPress={() => router.push("/consents")}
            >
              <Text style={styles.consentTypeTitle}>
                Financial Institution Consents
              </Text>
              <Text style={styles.consentTypeDescription}>
                Manage consents received from Financial Institutions
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f7fa",
  },
  contentContainer: {
    padding: 20,
    alignItems: "center",
  },
  cardWrapper: {
    width: "100%",
    maxWidth: 500,
  },
  accountsSection: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  consentsSection: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  iconContainer: {
    backgroundColor: "#f0ebfa",
    borderRadius: 10,
    marginRight: 10,
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  sectionIcon: {
    fontSize: 24,
  },
  sectionHeaderText: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#6E31DC",
    marginRight: 5,
  },
  sectionSubtitle: {
    fontSize: 16,
    color: "#555",
  },
  sectionDescription: {
    fontSize: 16,
    color: "#666",
    marginBottom: 15,
    marginLeft: 5,
  },
  purpleButton: {
    backgroundColor: "#6E31DC",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  consentTypes: {
    backgroundColor: "#f0f7fa",
    borderRadius: 5,
  },
  consentType: {
    padding: 15,
  },
  consentTypeTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#6E31DC",
    marginBottom: 5,
  },
  consentTypeDescription: {
    fontSize: 14,
    color: "#666",
  },
  divider: {
    height: 1,
    backgroundColor: "#ddd",
    marginHorizontal: 10,
  },
});
