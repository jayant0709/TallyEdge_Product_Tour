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
  // const { addHighlight } = useHighlight();
  const targetRef = useRef(null);
  const insets = useSafeAreaInsets();
  const { registerHighlight } = useTour();

  useEffect(() => {
    setTimeout(() => measureTarget(), 0);
  }, []);

  const measureTarget = () => {
    if (targetRef.current) {
      const nodeHandle = findNodeHandle(targetRef.current);
      if (nodeHandle != null) {
        UIManager.measureInWindow(nodeHandle, (x, y, width, height) => {
          console.log(insets);
          let adjustedY = y + insets.top;
          registerHighlight({
            id: id,
            x,
            y: adjustedY,
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

  return <View ref={targetRef}>{children}</View>;
}
