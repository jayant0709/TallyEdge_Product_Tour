import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import { styles } from "@/assets/styles/consents.select.account.consent";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";

interface BankAccount {
  id: string;
  bankName: string;
  accountType: string;
  accountNumber: string;
  selected: boolean;
}

const SelectAccountConsent = () => {
  const router = useRouter();
  const [accounts, setAccounts] = useState<BankAccount[]>([
    {
      id: "1",
      bankName: "Union Bank Of India",
      accountType: "Savings",
      accountNumber: "XXXXXXXXXX4654",
      selected: false,
    },
  ]);

  const [selectAll, setSelectAll] = useState(false);

  const handleSelectAll = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    setAccounts(
      accounts.map((account) => ({ ...account, selected: newSelectAll }))
    );
  };

  const toggleAccount = (id: string) => {
    const updatedAccounts = accounts.map((account) =>
      account.id === id ? { ...account, selected: !account.selected } : account
    );
    setAccounts(updatedAccounts);
    const allSelected = updatedAccounts.every((account) => account.selected);
    setSelectAll(allSelected);
  };

  const hasSelectedAccounts = accounts.some((account) => account.selected);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="#6E31DC" />
        </TouchableOpacity>
        <Text style={styles.headingText}>Create Consent</Text>
      </View>

      <ScrollView style={styles.scrollView}>
        <Text style={styles.sectionTitle}>Accounts except GST</Text>

        <TouchableOpacity
          style={styles.selectAllContainer}
          onPress={handleSelectAll}
        >
          <Text style={styles.selectAllText}>Select All</Text>
        </TouchableOpacity>

        {accounts.map((account) => (
          <TouchableOpacity
            key={account.id}
            style={styles.card}
            onPress={() => toggleAccount(account.id)}
          >
            <View
              style={[styles.checkbox, account.selected && styles.checkedBox]}
            >
              {account.selected && (
                <Ionicons name="checkmark" size={16} color="#6E31DC" />
              )}
            </View>
            <View style={styles.bankLogoContainer}>
              <Image
                source={require("@/assets/images/union-bank-logo.png")}
                style={styles.bankLogo}
                resizeMode="contain"
              />
            </View>
            <View style={styles.bankDetailsContainer}>
              <Text style={styles.bankName}>{account.bankName}</Text>
              <View style={styles.accountDetailsRow}>
                <Text style={styles.accountInfo}>
                  {account.accountType} | {account.accountNumber}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.nextButton,
            hasSelectedAccounts && styles.activeButton,
          ]}
          disabled={!hasSelectedAccounts}
          onPress={() => {
            if (hasSelectedAccounts) {
              router.push("/consents/consentForm");
            }
          }}
        >
          <Text style={styles.buttonText}>NEXT</Text>
        </TouchableOpacity>

        <View style={styles.footerTextContainer}>
          <Text style={styles.footerText}>Can't find your Account? </Text>
          <TouchableOpacity>
            <Text style={styles.linkText}>Add Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SelectAccountConsent;
