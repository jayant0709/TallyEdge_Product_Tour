import {
  View,
  Text,
  TouchableOpacity,
  LayoutChangeEvent,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants/colors";
import { styles } from "@/assets/styles/tooltip.styles";

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

    switch (direction) {
      case "top":
        return {
          left: x + width / 2 - tooltipSize.width / 2,
          top: y - tooltipSize.height - margin,
        };
      case "bottom":
        return {
          left: x + width / 2 - tooltipSize.width / 2,
          top: y + height + margin,
        };
      case "left":
        return {
          left: x - tooltipSize.width - margin,
          top: y + height / 2 - tooltipSize.height / 2,
        };
      case "right":
        return {
          left: x + width + margin,
          top: y + height / 2 - tooltipSize.height / 2,
        };
      default:
        return {};
    }
  };

const getArrowStyle = (direction: string) => {
    switch (direction) {
        case "top":
            return {
                arrow: {
                    position: "absolute",
                    left: tooltipSize.width / 2 - 10,
                    bottom: -12,
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
                position: {},
            };
        case "bottom":
            return {
                arrow: {
                    position: "absolute",
                    left: tooltipSize.width / 2 - 10,
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
                position: {},
            };
        case "left":
            return {
                arrow: {
                    position: "absolute",
                    right: -12,
                    top: tooltipSize.height / 2 - 10,
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
                position: {},
            };
        case "right":
            return {
                arrow: {
                    position: "absolute",
                    left: -12,
                    top: tooltipSize.height / 2 - 10,
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
                position: {},
            };
        default:
            return { arrow: {}, position: {} };
    }
};

  const tooltipStyle = getTooltipPosition();
  const arrowStyle = getArrowStyle(direction);

  return (
    <View style={[styles.tooltipContainer, tooltipStyle]}>
      <View
        style={[styles.tooltipArrowBase, arrowStyle.arrow, arrowStyle.position]}
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

            {stepNumber < totalSteps && (
              <TouchableOpacity onPress={onNext} style={styles.navButton}>
                <Text style={styles.navButtonText}>Next</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

export default Tooltip;
