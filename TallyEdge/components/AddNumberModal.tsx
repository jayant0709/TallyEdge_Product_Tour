import {
  View,
  Text,
  Modal,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import { styles } from "@/assets/styles/accounts.modal.styles";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants/colors";
type Props = {
  isModalVisible: boolean;
  setIsmodalVisible: (visible: boolean) => void;
};

function PhoneInput() {
  const [isCodeFocused, setCodeFocused] = useState(false);
  const [isPhoneFocused, setPhoneFocused] = useState(false);

  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <View
          style={[
            styles.inputContainer,
            {
              borderColor: isCodeFocused ? COLORS.primary : "#ccc",
              width: "30%",
              marginRight: 8,
            },
          ]}
        >
          <Text style={styles.floatingLabel}>Country Code</Text>
          <TextInput
            placeholder="+91"
            editable={false}
            placeholderTextColor="#000"
            style={styles.input}
          />
        </View>

        <View
          style={[
            styles.inputContainer,
            {
              borderColor: isPhoneFocused ? COLORS.primary : "#ccc",
              flex: 1,
              borderWidth: isPhoneFocused ? 2 : 1,
            },
          ]}
        >
          <Text style={styles.floatingLabel}>Mobile Number</Text>
          <TextInput
            placeholderTextColor="#000"
            style={styles.input}
            keyboardType="phone-pad"
            onFocus={() => setPhoneFocused(true)}
            onBlur={() => setPhoneFocused(false)}
          />
        </View>
      </View>
    </View>
  );
}

const AddNumberModal = ({ isModalVisible, setIsmodalVisible }: Props) => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Modal
        transparent
        animationType="slide"
        visible={isModalVisible}
        onRequestClose={() => setIsmodalVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => setIsmodalVisible(false)}>
          <View style={styles.backdrop} />
        </TouchableWithoutFeedback>

        <View style={styles.modalContent}>
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => router.push("/accounts/add_more_details")}
              style={styles.backButton}
            >
              <Ionicons name="chevron-back" size={28} color={COLORS.primary} />
            </TouchableOpacity>
            <Text style={styles.headingText}>Add Mobile Number</Text>
          </View>

          <PhoneInput />

          
        </View>
      </Modal>
    </View>
  );
};

export default AddNumberModal;
