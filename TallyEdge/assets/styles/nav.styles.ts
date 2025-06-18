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
  accountsHeader: {
    paddingVertical: 10,
  },
  accountsTitle: {
    fontSize: 20,
    marginBottom: 6,
    fontWeight: "bold",
  },
  customTabBarContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 80,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#e5e5e5",
    paddingBottom: 8,
    paddingTop: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 4,
  },

  // Tab Icon Wrapper
  tabIconContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },

  // Active Tab Circle
  activeTabBackground: {
    backgroundColor: COLORS.primary,
    borderRadius: 25,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 2, // Smaller margin for better text alignment
  },

  // Inactive Tab Circle
  inactiveTabBackground: {
    backgroundColor: COLORS.primaryLight,
    borderRadius: 25,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 2, // Smaller margin for better text alignment
  },

  dashBoardTab: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 32, 
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 5,
  },

  tabLabel: {
    fontSize: 10, 
    color: COLORS.primary,
    textAlign: "center",
    position: "relative",
  },
});
