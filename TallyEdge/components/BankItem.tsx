import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "@/assets/styles/accounts.banks.styles";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { COLORS } from "@/constants/colors";

type BankItemProps = {
  name: string;
  logo: any;
  prerequisites: string;
  description: string;
};

const BankItem: React.FC<BankItemProps> = ({
  name,
  logo,
  prerequisites,
  description,
}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.iconAndTitleContainer}>
          <Image source={logo} style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={styles.title} numberOfLines={2}>
              {name}
            </Text>
            <Text style={styles.subtitle}>{prerequisites}</Text>
          </View>
        </View>
        <FontAwesome name="angle-right" size={28} color={COLORS.primary} />
      </View>
      <Text style={styles.description} numberOfLines={2}>
        {description}
      </Text>
    </TouchableOpacity>
  );
};

export default BankItem;
