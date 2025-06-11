import { Ionicons } from "@expo/vector-icons";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "../assets/styles/users.styles";

export default function UsersScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentWrapper}>
        <View style={styles.content}>
          <View style={styles.userList}>
            <TouchableOpacity style={styles.userItem}>
              <View style={styles.userAvatar}>
                <Text style={styles.userInitial}>J</Text>
              </View>
              <View style={styles.userInfo}>
                <Text style={styles.userName}>Jayant Patil (You)</Text>
                <Text style={styles.userRole}>Admin</Text>
              </View>
              <Ionicons name="chevron-down" size={20} color="#6E31DC" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.floatingButton}>
        <Ionicons name="add" size={24} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
