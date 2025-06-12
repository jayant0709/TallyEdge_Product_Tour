import { StyleSheet } from "react-native";
import { COLORS } from "@/constants/colors";

export const styles = StyleSheet.create({
  container: {
    width: "95%",
    alignSelf: "center",
    height: "auto",
    backgroundColor: COLORS.white,
    elevation: 3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    borderRadius: 12,
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginVertical: 8,
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
  },
  iconAndTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    paddingRight: 10,
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 10,
    resizeMode: "contain",
  },
  textContainer: {
    flexShrink: 1,
    maxWidth: "90%",
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: COLORS.text,
    flexWrap: "wrap",
  },
  subtitle: {
    fontSize: 10,
    color: COLORS.secondaryText,
    marginTop: 2,
  },
  description: {
    padding: 12,
    paddingTop: 0,
    fontWeight: "500",
    fontSize: 12,
  }
});
