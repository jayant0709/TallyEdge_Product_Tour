import { FontAwesome5 } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../../assets/styles/dashboard.styles";
import HighlightWrapper from "@/components/HighlightWrapper";
import IntroExtroModal from "@/components/Modals/IntroExtroModal";
import { useTour } from "@/context/TourContext";

export default function Index() {
  const router = useRouter();
  const { hideIntroModal, currentStep, totalSteps } = useTour();

  return (
    <>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.cardWrapper}>
          <View style={styles.accountsSection}>
            <HighlightWrapper
              tooltip={true}
              tooltipDirection="bottom"
              tooltipHeading="Link Your Accounts"
              tooltipContent="Initially there are no accounts linked. Go ahead and link your bank accounts."
              stepNumber={1}
              screen="/"
              id="step-1"
            >
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
                    <Text style={styles.sectionSubtitle}>
                      (No Accounts linked)
                    </Text>
                  </View>
                  <Text style={styles.sectionDescription}>
                    Add/Manage accounts
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                style={styles.purpleButton}
                onPress={() => router.push("/accounts")}
              >
                <Text style={styles.buttonText}>Add Account</Text>
              </TouchableOpacity>
            </HighlightWrapper>
          </View>
        </View>

        <View style={styles.cardWrapper}>
          <View style={styles.consentsSection}>
            <HighlightWrapper
              tooltip={true}
              tooltipDirection="top"
              tooltipHeading="Manage Your Consents"
              tooltipContent="This is where you manage who can access your data. Tap 'Self Consent' to review yours, or 'FIU Consent' to grant access."
              stepNumber={2}
              screen="/"
              id="step-2"
            >
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
                  style={[
                    styles.consentType,
                    { borderBottomEndRadius: 10, borderBottomStartRadius: 10 },
                  ]}
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
            </HighlightWrapper>
          </View>
        </View>
      </ScrollView>
      <IntroExtroModal
        isVisible={currentStep === 0}
        onClose={() => hideIntroModal()}
        title="Welcome to TallyEdge!"
        content="See how TallyEdge helps you manage all your financial data and consents in one secure place."
        buttonText="Start Tour"
      />
      <IntroExtroModal
        isVisible={currentStep === totalSteps - 1}
        onClose={() => hideIntroModal()}
        title="Let's Get Started!"
        content="Setup complete. You can now start using TallyEdge to manage your financial data and consents seamlessly."
        buttonText="Finish"
      />
    </>
  );
}
