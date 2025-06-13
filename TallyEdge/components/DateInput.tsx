import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Ionicons } from "@expo/vector-icons";

export default function DateOfBirthInput() {
  const [date, setDate] = useState<Date | null>(null);
  const [showPicker, setShowPicker] = useState(false);

  const formattedDate = date
    ? `${String(date.getDate()).padStart(2, "0")}-${String(
        date.getMonth() + 1
      ).padStart(2, "0")}-${date.getFullYear()}`
    : "";

  const onChange = (_event: any, selectedDate?: Date) => {
    setShowPicker(false);
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  return (
    <View style={styles.wrapper}>
      <Text style={styles.floatingLabel}>Date of Birth</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="DD-MM-YYYY"
          value={formattedDate}
          editable={false}
          placeholderTextColor="#000"
        />
        <View style={styles.divider} />
        <TouchableOpacity onPress={() => setShowPicker(true)} style={styles.iconContainer}>
          <Ionicons name="calendar-outline" size={20} color="#000" />
        </TouchableOpacity>
      </View>   

      {showPicker && (
        <DateTimePicker
          value={date || new Date()}
          mode="date"
          display="default"
          maximumDate={new Date()}
          onChange={onChange}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 20,
  },
  floatingLabel: {
    position: "absolute",
    top: -8,
    left: 12,
    backgroundColor: "#fff",
    paddingHorizontal: 4,
    fontSize: 12,
    color: "#666",
    zIndex: 1,
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
    flex: 1,
    fontSize: 14,
    color: "#000",
  },
  divider: {
    width: 1,
    height: 24,
    backgroundColor: "#ccc",
    marginHorizontal: 10,
  },
  iconContainer: {
    padding: 4,
  },
});
