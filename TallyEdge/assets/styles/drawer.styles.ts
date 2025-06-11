import { COLORS } from "@/constants/colors";
import { StyleSheet, Dimensions } from "react-native";


export const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
    margin: 0,
    padding: 0,
  },
  drawerHeader: {
    flexDirection: "column",
    height: 200,
    width: "100%",
    backgroundColor: COLORS.primary,
    paddingHorizontal: 15,
  },
  headerTitleContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingLeft: 20,
    paddingTop: 40,
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
    justifyContent: "center", 
    paddingRight: 10,
    paddingTop: 50,
  },
  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 80
  },
  headerMiddle: {
    width: "100%",
    paddingVertical: 10,
    marginTop: 50,
  },
  headerLoginText: {
    color: COLORS.white,
    fontSize: 16,
    paddingLeft: 20,
  },
});
