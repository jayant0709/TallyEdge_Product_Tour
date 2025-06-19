import React, { useEffect, useRef } from "react";
import { View, findNodeHandle, UIManager } from "react-native";
import { useHighlight } from "@/context/HighlightContext";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTour } from "@/context/TourContext";

interface HighlightWrapperProps {
  children: React.ReactNode;
  tooltip?: boolean;
  tooltipDirection?: "top" | "bottom" | "left" | "right";
  tooltipHeading?: string;
  tooltipContent?: string;
  stepNumber: number;
  screen: string;
  id: string;
}

export default function HighlightWrapper({
  children,
  tooltip = false,
  tooltipDirection = "bottom",
  tooltipHeading = "",
  tooltipContent = "",
  stepNumber = 1,
  id,
  screen,
}: HighlightWrapperProps) {
  const targetRef = useRef(null);
  const insets = useSafeAreaInsets();
  const { registerHighlight, isTourActive, currentStep } = useTour();

  useEffect(() => {
    // Add a delay to ensure the component is fully rendered
    const timeoutId = setTimeout(() => measureTarget(), 100);

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    if (isTourActive && currentStep === stepNumber) {
      const timeoutId = setTimeout(() => measureTarget(), 100);
      return () => clearTimeout(timeoutId);
    }
  }, [isTourActive, currentStep, stepNumber]);
  const measureTarget = () => {
    if (targetRef.current) {
      const nodeHandle = findNodeHandle(targetRef.current);
      if (nodeHandle != null) {
        UIManager.measureInWindow(nodeHandle, (x, y, width, height) => {
          console.log(`Measuring ${id}:`, {
            x,
            y,
            width,
            height,
            screen,
            stepNumber,
          });
          registerHighlight({
            id: id,
            x,
            y,
            width,
            height,
            tooltip,
            tooltipDirection,
            tooltipContent: {
              heading: tooltipHeading,
              content: tooltipContent,
            },
            stepNumber,
            screen,
          });
        });
      }
    }
  };

  const handleLayout = (event: any) => {
    // Trigger measurement when layout changes
    setTimeout(() => measureTarget(), 0);
  };
  return (
    <View ref={targetRef} onLayout={handleLayout}>
      {children}
    </View>
  );
}
