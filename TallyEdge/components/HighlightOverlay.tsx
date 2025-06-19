import React from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import Svg, { Rect, Mask } from "react-native-svg";
import Tooltip from "@/components/Tooltip";
import { useTour } from "@/context/TourContext";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

export default function HighlightOverlay() {
  const {
    currentHighlights,
    nextStep,
    prevStep,
    endTour,
    isTourActive,
    totalSteps,
    currentStep,
  } = useTour();

  if (!isTourActive || currentHighlights.length === 0) return null;

  return (
    <View style={[StyleSheet.absoluteFill, { zIndex: 999 }]}>
      <Svg width={screenWidth} height={screenHeight}>
        <Mask id="mask" x="0" y="0" width={screenWidth} height={screenHeight}>
          <Rect
            x="0"
            y="0"
            width={screenWidth}
            height={screenHeight}
            fill="white"
          />
          {currentHighlights.map((rect, index) => {
            console.log("Rendering highlight:", rect);
            return (
              <Rect
                key={index}
                x={rect.x}
                y={rect.y}
                width={rect.width}
                height={rect.height}
                rx={8}
                ry={8}
                fill="black"
              />
            );
          })}
        </Mask>

        <Rect
          x="0"
          y="0"
          width={screenWidth}
          height={screenHeight}
          fill="rgba(0, 0, 0, 0.7)"
          mask="url(#mask)"
        />
      </Svg>
      {currentHighlights.map((rect, index) => {
        if (!rect.tooltip) return null;

        return (
          <Tooltip
            x={rect.x}
            y={rect.y}
            key={index}
            width={rect.width}
            height={rect.height}
            direction={rect.tooltipDirection || "bottom"}
            heading={rect.tooltipContent?.heading || ""}
            content={rect.tooltipContent?.content || ""}
            stepNumber={currentStep}
            totalSteps={totalSteps}
            onNext={nextStep}
            onPrevious={prevStep}
            onClose={endTour}
          />
        );
      })}
    </View>
  );
}
