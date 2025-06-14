import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import { styles } from "@/assets/styles/accounts.addNumber.styles";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants/colors";
import { TextInput } from "react-native-gesture-handler";
import DateInput from "@/components/DateInput";
import AddNumberModal from "@/components/AddNumberModal";

const AddMoreDetails = () => {
  const router = useRouter();
  const [data, setData] = useState(["+917670903855", "+919876543210"]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const renderItem = ({ item, index }: { item: string; index: number }) => (
    <View style={styles.cardWrapper}>
      <TouchableOpacity
        style={styles.row}
        onPress={() => setSelectedIndex(index)}
        activeOpacity={0.8}
      >
        <View style={styles.radioOuter}>
          {selectedIndex === index && <View style={styles.radioInner} />}
        </View>
        <Text style={styles.phoneText}>{item}</Text>
      </TouchableOpacity>
    </View>
  );

  const renderAddNew = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    return (
      <>
        <AddNumberModal isModalVisible={isModalVisible} setIsmodalVisible={setIsModalVisible} />
        <TouchableOpacity
          style={styles.addNewRow}
          activeOpacity={0.8}
          onPress={() => setIsModalVisible(true)}
        >
          <AntDesign name="plus" size={20} color={COLORS.primary} />
          <Text style={styles.addNewText}>Mobile Number</Text>
        </TouchableOpacity>
      </>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <Ionicons name="chevron-back" size={28} color={COLORS.primary} />
        </TouchableOpacity>
        <Text style={styles.headingText}>Add More Details</Text>
      </View>

      <View style={styles.contentContainer}>
        <View>
          <Text style={styles.subheading}>Mobile Number</Text>
          <FlatList
            data={data}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item}
            renderItem={renderItem}
            ListFooterComponent={renderAddNew}
          />
        </View>
        <View>
          <Text style={styles.subheading}>Additional Details</Text>
          <View style={styles.input}>
            <TextInput placeholder="PAN" style={styles.inputField} />
            <DateInput />
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/accounts/discover_accounts")}
          >
            <Text style={styles.buttonText}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AddMoreDetails;
