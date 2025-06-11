import { View, Text, TouchableOpacity, Pressable } from "react-native";
import React from "react";
import { styles } from "@/assets/styles/consents.create.consents";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";

const CreateConsent = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="#6E31DC" />
        </TouchableOpacity>
        <Text style={styles.headingText}>Create Consent</Text>
      </View>

      <Text style={styles.sectionTitle}>Financial Institution Types</Text>

      <Pressable style={styles.card}>
        <Text style={styles.cardText}>Accounts except GST (1)</Text>
        <Ionicons name="chevron-forward" size={20} color="#6E31DC" />
      </Pressable>

      <View style={styles.footerTextContainer}>
        <Text style={styles.footerText}>Can’t find your account? </Text>
        <TouchableOpacity>
          <Text style={styles.linkText}>Add Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreateConsent;
