import { COLORS } from "@/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  contentContainer: {
    flex: 1,
    padding: 15,
    alignItems: "center",
  },
  cardWrapper: {
    width: "100%",
    paddingTop: 20,
    maxWidth: 400,
  },
  accountsSection: {
    backgroundColor: "#fff",
    borderRadius: 10,
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
    padding: 15,
    paddingBottom: 7,
  },
  iconContainer: {
    backgroundColor: COLORS.primaryLight,
    borderRadius: 13,
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
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  sectionHeaderTextTop: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: COLORS.primary,
    marginRight: 5,
  },
  sectionSubtitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: COLORS.text,
  },
  sectionDescription: {
    fontSize: 12,
    color: COLORS.secondaryText,
  },
  purpleButton: {
    backgroundColor: COLORS.button,
    height: 40,
    width: "100%",
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 15,
    fontWeight: "bold",
  },
  consentTypes: {
    backgroundColor: COLORS.primaryLight,
    borderRadius: 5,
  },
  consentType: {
    padding: 15,
  },
  consentTypeTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: COLORS.primary,
  },
  consentTypeDescription: {
    fontSize: 12,
    color: COLORS.text,
  },
  divider: {
    height: 1,
    backgroundColor: "#ddd",
  },
});
