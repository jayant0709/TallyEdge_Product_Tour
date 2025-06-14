import { FontAwesome5 } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../../assets/styles/dashboard.styles";

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
              <View style={styles.sectionHeaderTextTop}>
                <Text style={styles.sectionTitle}>Accounts</Text>
                <Text style={styles.sectionSubtitle}>(No Accounts linked)</Text>
              </View>
              <Text style={styles.sectionDescription}>Add/Manage accounts</Text>
            </View>
          </View>
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
            <View style={styles.sectionHeaderText}>
              <Text style={styles.sectionTitle}>Consents</Text>
              <Text style={styles.sectionDescription}>Manage consents</Text>
            </View>
          </View>

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
              style={[styles.consentType, {borderBottomEndRadius: 10, borderBottomStartRadius: 10}]}
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
