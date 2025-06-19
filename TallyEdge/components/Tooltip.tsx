import {
  View,
  Text,
  TouchableOpacity,
  LayoutChangeEvent,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants/colors";
import { styles } from "@/assets/styles/tooltip.styles";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

type Props = {
  x: number;
  y: number;
  width: number;
  height: number;
  direction: "top" | "bottom" | "left" | "right";
  heading: string;
  content: string;
  stepNumber: number;
  totalSteps: number;
  onClose: () => void;
  onNext?: () => void;
  onPrevious?: () => void;
};

const Tooltip = ({
  x,
  y,
  width,
  height,
  direction,
  heading,
  content,
  stepNumber,
  totalSteps,
  onClose,
  onNext,
  onPrevious,
}: Props) => {
  const [tooltipSize, setTooltipSize] = useState({ width: 0, height: 0 });

  const handleLayout = (event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout;
    setTooltipSize({ width, height });
  };
  const getTooltipPosition = () => {
    const margin = 12;
    const padding = 20; // Padding from screen edges

    let position: any = {};

    switch (direction) {
      case "top":
        position = {
          left: x + width / 2 - tooltipSize.width / 2,
          top: y - tooltipSize.height - margin,
        };
        break;
      case "bottom":
        position = {
          left: x + width / 2 - tooltipSize.width / 2,
          top: y + height + margin,
        };
        break;
      case "left":
        position = {
          left: x - tooltipSize.width - margin,
          top: y + height / 2 - tooltipSize.height / 2,
        };
        break;
      case "right":
        position = {
          left: x + width + margin,
          top: y + height / 2 - tooltipSize.height / 2,
        };
        break;
      default:
        position = {};
    }

    if (position.left < padding) {
      position.left = padding;
    } else if (position.left + tooltipSize.width > screenWidth - padding) {
      position.left = screenWidth - tooltipSize.width - padding;
    }

    if (position.top < padding) {
      position.top = padding;
    } else if (position.top + tooltipSize.height > screenHeight - padding) {
      position.top = screenHeight - tooltipSize.height - padding;
    }

    return position;
  };
  const getArrowStyle = (direction: string) => {
    const tooltipPosition = getTooltipPosition();
    const elementCenterX = x + width / 2;
    const elementCenterY = y + height / 2;

    const arrowLeft = elementCenterX - (tooltipPosition.left || 0) - 10;
    const arrowTop = elementCenterY - (tooltipPosition.top || 0) - 10;

    switch (direction) {
      case "top":
        return {
          arrow: {
            position: "absolute",
            left: Math.max(10, Math.min(arrowLeft, tooltipSize.width - 30)),
            bottom: -30,
            width: 0,
            height: 0,
            borderLeftWidth: 10,
            borderRightWidth: 10,
            borderTopWidth: 12,
            borderLeftColor: "transparent",
            borderRightColor: "transparent",
            borderTopColor: COLORS.white,
            borderBottomWidth: 0,
            borderBottomColor: "transparent",
          },
        };
      case "bottom":
        return {
          arrow: {
            position: "absolute",
            left: Math.max(10, Math.min(arrowLeft, tooltipSize.width - 30)),
            top: -12,
            width: 0,
            height: 0,
            borderLeftWidth: 10,
            borderRightWidth: 10,
            borderBottomWidth: 12,
            borderLeftColor: "transparent",
            borderRightColor: "transparent",
            borderBottomColor: COLORS.white,
            borderTopWidth: 0,
            borderTopColor: "transparent",
          },
        };
      case "left":
        return {
          arrow: {
            position: "absolute",
            right: -12,
            top: Math.max(10, Math.min(arrowTop, tooltipSize.height - 30)),
            width: 0,
            height: 0,
            borderTopWidth: 10,
            borderBottomWidth: 10,
            borderLeftWidth: 12,
            borderTopColor: "transparent",
            borderBottomColor: "transparent",
            borderLeftColor: COLORS.white,
            borderRightWidth: 0,
            borderRightColor: "transparent",
          },
        };
      case "right":
        return {
          arrow: {
            position: "absolute",
            left: -12,
            top: Math.max(10, Math.min(arrowTop, tooltipSize.height - 30)),
            width: 0,
            height: 0,
            borderTopWidth: 10,
            borderBottomWidth: 10,
            borderRightWidth: 12,
            borderTopColor: "transparent",
            borderBottomColor: "transparent",
            borderRightColor: COLORS.white,
            borderLeftWidth: 0,
            borderLeftColor: "transparent",
          },
        };
      default:
        return { arrow: {} };
    }
  };

  const tooltipStyle = getTooltipPosition();
  const arrowStyle = getArrowStyle(direction);
  return (
    <View style={[styles.tooltipContainer, tooltipStyle]}>
      <View
        style={[styles.tooltipArrowBase, arrowStyle.arrow, { zIndex: 1001 }]}
      />

      <View style={styles.tooltipContent} onLayout={handleLayout}>
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <Ionicons name="close" size={20} color="#000" />
        </TouchableOpacity>
        <Text style={styles.tooltipHeading}>{heading}</Text>
        <Text style={styles.tooltipText}>{content}</Text>
        <View style={styles.navButtonContainer}>
          <Text style={styles.tooltipStep}>
            {stepNumber} of {totalSteps}
          </Text>

          <View style={styles.navButtonContainer}>
            {stepNumber > 1 && (
              <TouchableOpacity onPress={onPrevious} style={styles.navButton}>
                <Text style={styles.navButtonText}>Previous</Text>
              </TouchableOpacity>
            )}

            {stepNumber < totalSteps ? (
              <TouchableOpacity onPress={onNext} style={styles.navButton}>
                <Text style={styles.navButtonText}>Next</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={onClose} style={styles.navButton}>
                <Text style={styles.navButtonText}>Finish</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

export default Tooltip;
