import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "@/assets/styles/accounts.discover.styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";

const discover_accounts = () => {
  const router = useRouter();
  return (
    <View style={styles.header}>
      <View style={styles.headerLeft}>
        <View style={styles.heading}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={24} color="#6E31DC" />
          </TouchableOpacity>

          <Text style={styles.headingText}>Discover Accounts</Text>
        </View>
      </View>
    </View>
  );
};

export default discover_accounts;
