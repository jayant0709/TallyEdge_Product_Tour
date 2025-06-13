import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Modal,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { styles } from "@/assets/styles/consents.consentForm";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { black } from "react-native-paper/lib/typescript/styles/themes/v2/colors";
import { COLORS } from "@/constants/colors";

const ConsentForm = () => {
  const router = useRouter();
  const [dataTypes, setDataTypes] = useState({
    profile: false,
    summary: false,
    transactions: false,
  });
  const [fetchType, setFetchType] = useState("recurring");
  const [frequency, setFrequency] = useState("Daily");
  const [showFrequencyModal, setShowFrequencyModal] = useState(false);
  const [periodType, setPeriodType] = useState("Custom");
  const [showPeriodModal, setShowPeriodModal] = useState(false);

  const [transactionStartDate, setTransactionStartDate] =
    useState("1 May 2025");
  const [transactionEndDate, setTransactionEndDate] = useState("30 Jun 2025");

  const [consentStartDate, setConsentStartDate] = useState("12 Jun 2025");
  const [consentEndDate, setConsentEndDate] = useState("30 Jun 2025");

  const [consentName, setConsentName] = useState("Get Summary & Transactions");

  interface DataTypes {
    profile: boolean;
    summary: boolean;
    transactions: boolean;
  }

  const toggleDataType = (type: keyof DataTypes): void => {
    setDataTypes((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  type FetchType = "one-time" | "recurring";

  const handleFetchTypeChange = (type: FetchType): void => {
    setFetchType(type);
  };

  const frequencyOptions = ["Daily", "Monthly", "Yearly"];

  const periodOptions = [
    "Last month",
    "Current month",
    "Last 6 month",
    "This financial year",
    "Last financial year",
    "Custom",
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="#6E31DC" />
        </TouchableOpacity>
        <Text style={styles.headingText}>Create Consent</Text>
      </View>

      <ScrollView style={styles.scrollView}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Choose Data Type</Text>

          <TouchableOpacity
            style={styles.checkboxContainer}
            onPress={() => toggleDataType("profile")}
          >
            <View style={styles.checkbox}>
              {dataTypes.profile && (
                <Ionicons name="checkmark" size={16} color="#6E31DC" />
              )}
            </View>
            <Text style={styles.checkboxLabel}>Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.checkboxContainer}
            onPress={() => toggleDataType("summary")}
          >
            <View style={styles.checkbox}>
              {dataTypes.summary && (
                <Ionicons name="checkmark" size={16} color="#6E31DC" />
              )}
            </View>
            <Text style={styles.checkboxLabel}>Summary</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.checkboxContainer}
            onPress={() => toggleDataType("transactions")}
          >
            <View style={styles.checkbox}>
              {dataTypes.transactions && (
                <Ionicons name="checkmark" size={16} color="#6E31DC" />
              )}
            </View>
            <Text style={styles.checkboxLabel}>Transactions</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            Data Fetch Type
            <TouchableOpacity style={styles.infoIcon}>
              <Ionicons name="information" size={16} color="#666666" />
            </TouchableOpacity>
          </Text>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 20,
            }}
          >
            <TouchableOpacity
              style={{ flexDirection: "row", alignItems: "center" }}
              onPress={() => handleFetchTypeChange("one-time")}
            >
              <View style={styles.radioOuterCircle}>
                {fetchType === "one-time" && (
                  <View style={styles.radioInnerCircle} />
                )}
              </View>
              <Text style={styles.checkboxLabel}>One Time</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{ flexDirection: "row", alignItems: "center" }}
              onPress={() => handleFetchTypeChange("recurring")}
            >
              <View style={styles.radioOuterCircle}>
                {fetchType === "recurring" && (
                  <View style={styles.radioInnerCircle} />
                )}
              </View>
              <Text style={styles.checkboxLabel}>Recurring</Text>
            </TouchableOpacity>
          </View>

          {fetchType === "recurring" && (
            <>
              <Text style={styles.labelText}>Frequency</Text>
              <TouchableOpacity
                style={styles.dropdownContainer}
                onPress={() => setShowFrequencyModal(!showFrequencyModal)}
              >
                <Text style={styles.dropdownText}>{frequency}</Text>
                <Ionicons
                  name={showFrequencyModal ? "chevron-up" : "chevron-down"}
                  size={20}
                  color="#6E31DC"
                />
              </TouchableOpacity>

              {showFrequencyModal && (
                <View style={styles.inlineDropdownContainer}>
                  {frequencyOptions.map((option, index) => (
                    <TouchableOpacity
                      key={option}
                      style={[
                        styles.inlineDropdownOption,
                        index === frequencyOptions.length - 1 &&
                          styles.inlineDropdownOptionLast,
                      ]}
                      onPress={() => {
                        setFrequency(option);
                        setShowFrequencyModal(false);
                      }}
                    >
                      <Text style={styles.inlineDropdownText}>{option}</Text>
                      <View style={styles.radioOuterCircle}>
                        {frequency === option && (
                          <View style={styles.radioInnerCircle} />
                        )}
                      </View>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </>
          )}
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Transaction Period</Text>

          <Text style={styles.labelText}>Choose Period</Text>
          <TouchableOpacity
            style={styles.dropdownContainer}
            onPress={() => setShowPeriodModal(!showPeriodModal)}
          >
            <Text style={styles.dropdownText}>{periodType}</Text>
            <Ionicons
              name={showPeriodModal ? "chevron-up" : "chevron-down"}
              size={20}
              color="#6E31DC"
            />
          </TouchableOpacity>

          {showPeriodModal && (
            <View style={styles.inlineDropdownContainer}>
              {periodOptions.map((option, index) => (
                <TouchableOpacity
                  key={option}
                  style={[
                    styles.inlineDropdownOption,
                    index === periodOptions.length - 1 &&
                      styles.inlineDropdownOptionLast,
                  ]}
                  onPress={() => {
                    setPeriodType(option);
                    setShowPeriodModal(false);
                  }}
                >
                  <Text style={styles.inlineDropdownText}>{option}</Text>
                  <View style={styles.radioOuterCircle}>
                    {periodType === option && (
                      <View style={styles.radioInnerCircle} />
                    )}
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          )}

          {periodType === "Custom" && (
            <View style={styles.datePickerRow}>
              <View style={styles.datePickerColumn}>
                <Text style={styles.dateLabel}>Start Date</Text>
                <TouchableOpacity style={styles.datePickerContainer}>
                  <Text style={styles.dateText}>{transactionStartDate}</Text>
                  <Ionicons name="calendar-outline" size={20} color="#666666" />
                </TouchableOpacity>
              </View>

              <View style={styles.datePickerColumn}>
                <Text style={styles.dateLabel}>End Date</Text>
                <TouchableOpacity style={styles.datePickerContainer}>
                  <Text style={styles.dateText}>{transactionEndDate}</Text>
                  <Ionicons name="calendar-outline" size={20} color="#666666" />
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Consent validity period</Text>
          <Text style={styles.sectionSubtitle}>
            You will be able to fetch the details as per the parameters during
            the specified period.
          </Text>

          <View style={styles.datePickerRow}>
            <View style={styles.datePickerColumn}>
              <Text style={styles.dateLabel}>Start Date</Text>
              <TouchableOpacity style={styles.datePickerContainer}>
                <Text style={styles.dateText}>{consentStartDate}</Text>
                <Ionicons name="calendar-outline" size={20} color="#666666" />
              </TouchableOpacity>
            </View>

            <View style={styles.datePickerColumn}>
              <Text style={styles.dateLabel}>End Date</Text>
              <TouchableOpacity style={styles.datePickerContainer}>
                <Text style={styles.dateText}>{consentEndDate}</Text>
                <Ionicons name="calendar-outline" size={20} color="#666666" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Consent Name</Text>

          <Text style={styles.labelText}>Name</Text>
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              value={consentName}
              onChangeText={setConsentName}
              placeholder="Enter consent name"
            />
          </View>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            Other Details
            <TouchableOpacity style={styles.infoIcon}>
              <Ionicons name="information" size={16} color="#666666" />
            </TouchableOpacity>
          </Text>

          <Text style={styles.detailsText}>
            For this consent, Purpose is{" "}
            <Text style={{ fontWeight: "700", color: COLORS.black }}>
              Wealth management service
            </Text>
            , Mode of access is{" "}
            <Text style={{ fontWeight: "700", color: COLORS.black }}>
              store
            </Text>
            , Data life is{" "}
            <Text style={{ fontWeight: "700", color: COLORS.black }}>
              Infinite
            </Text>
            , Type of information is{" "}
            <Text style={{ fontWeight: "700", color: COLORS.black }}>
              AIF, CIS, Deposit, Equities, ETF, General Insurance, IDR,
              Insurance Policy, INVIT, Life Insurance, Mutual Funds, NPS,
              Recurring Deposit, REIT, SIP & Term Deposit
            </Text>
            .
          </Text>
        </View>

        <View style={{ height: 100 }} />
      </ScrollView>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/(drawer)/(tabs)/consents")}
        >
          <Text style={styles.buttonText}>CREATE CONSENT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ConsentForm;
