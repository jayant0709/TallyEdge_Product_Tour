import { COLORS } from "@/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
  },
  headerTop: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  backButton: {
    paddingRight: 10,
  },
  headingText: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.text,
  },
  headerBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  mobileContainer: {
    borderRightColor: COLORS.secondaryText,
    borderRightWidth: 1,
    paddingRight: 15,
    marginRight: 10,
    flex: 1,
  },
  mobileInfo: {
    color: COLORS.secondaryText,
    fontSize: 14,
  },
  mobileNumber: {
    fontSize: 16,
    fontWeight: "bold",
    color: COLORS.text,
    paddingTop: 5,
  },
  searchBar: {
    backgroundColor: COLORS.white,
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 40,
    marginTop: 15,
    borderColor: COLORS.secondaryText,
    borderWidth: 1,
    minHeight: 45
  },
  flatlist: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 10,
  }
});
