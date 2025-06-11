import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f7fa",
  },
  tabContainer: {
    flexDirection: "row",
    backgroundColor: "#6E31DC",
    paddingTop: 15,
    marginTop: 10,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  tab: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 10,
  },
  activeTab: {
    borderBottomColor: "#fff",
  },
  tabText: {
    color: "rgba(255, 255, 255, 0.7)",
    fontWeight: "600",
    fontSize: 14,
    textAlign: "center",
  },
  activeTabText: {
    color: "#fff",
    fontWeight: "bold",
  },
  activeTabIndicator: {
    height: 3,
    backgroundColor: "#fff",
    width: "80%",
    position: "absolute",
    bottom: 0,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
  },
  contentWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  contentContainer: {
    flex: 1,
    width: "100%",
    maxWidth: 600,
  },
  emptyState: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  emptyStateTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  emptyStateSubtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
  },
  floatingButton: {
    position: "absolute",
    right: 20,
    bottom: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#6E31DC",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
});
export default styles;