import { COLORS } from "@/constants/colors";
import { StyleSheet, Dimensions } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.4)',
    zIndex: 1,
  },
  drawer: {
    position: "absolute",
    top: 0,
    right: 0,
    width: SCREEN_WIDTH * 0.8,
    height: SCREEN_HEIGHT,
    backgroundColor: COLORS.primary,
    padding: 20,
    elevation: 5,
    zIndex: 2, // must be higher than backdrop
  },
  closeBtn: {
    alignSelf: "flex-end",
  },
  title: {
    fontSize: 22,
    marginVertical: 20,
  },
  navItem: {
    marginVertical: 10,
  },
});
