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
    height: 280,
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
    paddingTop: 35,
  },
  logoImage: {
    width: 60,
    height: 60,
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
    marginTop: 30,
  },
  headerLoginText: {
    color: COLORS.white,
    fontSize: 16,
    paddingLeft: 20,
    letterSpacing: 1,
  },
  dropdownContainer: {
    width: "90%",
    alignSelf: "center",
    marginTop: 10,
    paddingLeft: 10
  },
  container: {
    height: 42,
    zIndex: 9999, 
  },
  dropdown: {
    height: 42,
    minHeight: 42,
    backgroundColor: COLORS.white,
    borderColor: COLORS.secondaryText,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 0,
  },
  dropDownContainer: {
    borderColor: COLORS.secondaryText,
    borderWidth: 0.5,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    marginTop: 2,
  },
  headerBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  contentContainer: {
    flex: 1,
    padding: 20,
    height: Dimensions.get("window").height - 330, 
    backgroundColor: COLORS.background,
  },
 item: {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  paddingVertical: 14,
  paddingHorizontal: 16,
  backgroundColor: "#fff",
  borderRadius: 12,
  marginVertical: 6,
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 4,
  elevation: 3,
},

itemIconAndTitle: {
  flexDirection: "row",
  alignItems: "center",
},

itemText: {
  marginLeft: 12,
  fontSize: 16,
  fontWeight: "500",
  color: COLORS.primary,
},
footer:{
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: 10,
  paddingHorizontal: 50,
},
footerText:{
  color: COLORS.primary,
}
});
