import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

const baseCard = {
  backgroundColor: COLORS.white,
  borderRadius: 10,
  paddingVertical: 16,
  paddingHorizontal: 16,
  marginBottom: 12,
};

const cardShadow = {
  shadowColor: "#111",
  shadowOpacity: 0.2,
  shadowRadius: 10,
  shadowOffset: { width: 1, height: 1 },
  elevation: 4,
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  cardWrapper: {
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 4,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },

  backButton: {
    paddingRight: 10,
  },

  headingText: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.text,
  },

  contentContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 20,
  },

  subheading: {
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.text,
    marginBottom: 12,
  },

  row: {
    ...baseCard,
    ...cardShadow,
    flexDirection: "row",
    alignItems: "center",
  },

  addNewRow: {
    ...baseCard,
    ...cardShadow,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },

  radioOuter: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  radioInner: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: COLORS.primary,
  },

  phoneText: {
    fontSize: 16,
    color: COLORS.text,
  },

  addNewText: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: "bold",
    color: COLORS.primary,
  },
  input: {
    ...baseCard,
    ...cardShadow,
    padding: 12,
    fontSize: 16,
    color: COLORS.text,
    borderRadius: 8,
    marginBottom: 20,
  },
  inputField: {
    fontSize: 14,
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 8,
    padding: 12,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingTop: 16,
    paddingBottom: 16,
    paddingHorizontal: 16,
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "bold",
  },
});
