import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import { styles } from "@/assets/styles/accounts.discover.styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { COLORS } from "@/constants/colors";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { FlatList } from "react-native-gesture-handler";
import BankItem from "@/components/BankItem";
import HighlightWrapper from "@/components/HighlightWrapper";

const banks = [
  {
    name: "CAMS CRA",
    logo: require("@/assets/images/banks/cams-cra.png"),
    prerequisites: "Requires Mobile Number & PAN",
    description: "NPS",
  },
  {
    name: "CAMS RTA",
    logo: require("@/assets/images/banks/cams-rta.png"),
    prerequisites: "Requires Mobile Number & PAN",
    description: "SIP / Mutual Funds",
  },
  {
    name: "Canara HSBC Life Insurance Co. Ltd.",
    logo: require("@/assets/images/banks/hsbc.png"),
    prerequisites: "Requires Mobile Number & Date of Birth",
    description: "Insurance Policy",
  },
  {
    name: "Central Depository Services Limited",
    logo: require("@/assets/images/banks/csdl.png"),
    prerequisites: "Requires Mobile Number & PAN",
    description:
      "Equities / Mutual Funds / IDR / REIT / CIS / INVIT / AIF / ETF",
  },
  {
    name: "FEDERAL BANK",
    logo: require("@/assets/images/banks/federal.png"),
    prerequisites: "Requires Mobile Number",
    description: "Deposit",
  },
  {
    name: "Union Bank of India",
    logo: require("@/assets/images/banks/union-bank.png"),
    prerequisites: "Requires Mobile Number",
    description: "Deposit",
  },
];

const DiscoverAccounts = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <TouchableOpacity
            onPress={() => router.back()}
            style={styles.backButton}
          >
            <Ionicons name="chevron-back" size={28} color={COLORS.primary} />
          </TouchableOpacity>
          <Text style={styles.headingText}>Discover Accounts</Text>
        </View>

        <View style={styles.headerBottom}>
          <View style={styles.mobileContainer}>
            <Text style={styles.mobileInfo}>
              Discover Accounts using mobile number
            </Text>
            <Text style={styles.mobileNumber}>+91XXXXXX1234</Text>
          </View>
          <HighlightWrapper tooltip={true} tooltipDirection="left" tooltipHeading="Add More Details" tooltipContent="Add more details to your account for better discovery." stepNumber={4} screen="/accounts/discover_accounts" id="step-4">
          <TouchableOpacity
            style={styles.pencilIcon}
            onPress={() => router.push("/accounts/add_more_details")}
          >
            <MaterialCommunityIcons
              name="pencil-outline"
              size={24}
              color={COLORS.primary}
            />
          </TouchableOpacity>
          </HighlightWrapper>
        </View>

        <TextInput placeholder="Search" style={styles.searchBar} />
      </View>
      <HighlightWrapper
        tooltip={true}
        tooltipDirection="top"
        tooltipHeading="Affiliated Banks"
        tooltipContent="Select from a list of banks."
        stepNumber={3}
        screen="/accounts/discover_accounts"
        id="step-3"
      >
        <>
          <FlatList
            data={banks}
            renderItem={({ item }) => <BankItem {...item} />}
            keyExtractor={(item, index) => `${item.name}-${index}`}
            style={styles.flatlist}
            showsVerticalScrollIndicator={false}
          />
        </>
      </HighlightWrapper>
    </View>
  );
};

export default DiscoverAccounts;
