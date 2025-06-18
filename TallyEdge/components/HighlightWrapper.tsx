import React, { useEffect, useRef } from "react";
import { View, findNodeHandle, UIManager, InteractionManager } from "react-native";
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
  const { registerHighlight } = useTour();
  const insets = useSafeAreaInsets();

  useEffect(() => {
    const task = InteractionManager.runAfterInteractions(() => {
      measureTarget();
    });

    return () => task.cancel(); 
  }, []);

  const measureTarget = () => {
    if (targetRef.current) {
      const nodeHandle = findNodeHandle(targetRef.current);
      if (nodeHandle != null) {
        UIManager.measureInWindow(nodeHandle, (x, y, width, height) => {
          registerHighlight({
            id,
            x,
            y: y + insets.top, 
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
