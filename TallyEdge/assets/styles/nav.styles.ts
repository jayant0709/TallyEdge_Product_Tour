import { COLORS } from "@/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  headerTitleContainer: {
    alignItems: "center",
    justifyContent: "flex-start",
  },
  logoImage: {
    width: 70,
    height: 70,
    resizeMode: "contain",
    borderRadius: 5,
  },
  tagline: {
    color: COLORS.white,
    fontSize: 4,
    opacity: 0.8,
  },
  menuButton: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  menuLine: {
    width: 25,
    height: 2.5,
    marginVertical: 4,
    borderRadius: 1,
  },
  whiteMenuLine: {
    backgroundColor: "#fff",
  },
  darkMenuLine: {
    backgroundColor: "#333",
  },
  tabIconContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  activeTabBackground: {
    backgroundColor: "#6E31DC",
    borderRadius: 50,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 44,
    height: 44,
    marginBottom: 20,
  },
  accountsHeader: {
    paddingVertical: 10,
  },
  accountsTitle: {
    fontSize: 20,
    marginBottom: 6,
    fontWeight: "bold",
  },
});
