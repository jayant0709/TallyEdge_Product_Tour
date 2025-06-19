import React, { useEffect, useRef } from "react";
import {
  View,
  findNodeHandle,
  UIManager,
  InteractionManager,
  Dimensions,
} from "react-native";
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
          console.log(`Measuring ${id}:`, { x, y, width, height });

          if (width > 0 && height > 0) {
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
          } else {
            console.warn(
              `Invalid measurement for ${id}, will rely on onLayout`
            );
          }
        });
      }
    }
  };
  const handleLayout = (event: any) => {
    const { width: layoutWidth, height: layoutHeight } =
      event.nativeEvent.layout;
    console.log(`onLayout for ${id}:`, { layoutWidth, layoutHeight });
    if (id === "step-4" && layoutHeight === 0) {
      const { width: screenWidth, height: screenHeight } =
        Dimensions.get("window");
      const buttonSize = 60;
      const margin = 20;

      const tabBarHeight = 80;

      const buttonX = screenWidth - margin - buttonSize;
      const buttonY = screenHeight - margin - buttonSize - tabBarHeight;

      // console.log(`Manual calculation for floating button:`, {
      //   buttonX,
      //   buttonY,
      //   buttonSize,
      //   screenWidth,
      //   screenHeight,
      //   tabBarHeight,
      //   insetsBottom: insets.bottom,
      //   originalY: screenHeight - margin - buttonSize,
      // });

      registerHighlight({
        id,
        x: buttonX,
        y: buttonY,
        width: buttonSize,
        height: buttonSize,
        tooltip,
        tooltipDirection,
        tooltipContent: {
          heading: tooltipHeading,
          content: tooltipContent,
        },
        stepNumber,
        screen,
      });
      return;
    }

    if (targetRef.current && layoutWidth > 0 && layoutHeight > 0) {
      const nodeHandle = findNodeHandle(targetRef.current);
      if (nodeHandle != null) {
        UIManager.measureInWindow(nodeHandle, (x, y, width, height) => {
          console.log(`Layout-based measurement for ${id}:`, {
            x,
            y,
            width,
            height,
          });

          if (width > 0 && height > 0) {
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
          }
        });
      }
    }
  };

  return (
    <View ref={targetRef} onLayout={handleLayout}>
      {children}
    </View>
  );
}
