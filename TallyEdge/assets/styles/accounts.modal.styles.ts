import { COLORS } from "@/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backdrop: {
    flex: 1,
    backgroundColor: "#00000088",
  },
  modalContent: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: COLORS.background,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
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
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginBottom: 12,
    shadowColor: "#111",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 1, height: 1 },
    elevation: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  floatingLabel: {
    position: "absolute",
    top: -8,
    left: 8,
    backgroundColor: "#fff",
    paddingHorizontal: 4,
    fontSize: 10,
    color: "#666",
    zIndex: 1,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 12,
    backgroundColor: "#fff",
  },
  input: {
    fontSize: 14,
    color: "#000",
  },
});
