import React from 'react';
import { View, Dimensions, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Svg, { Rect, Mask } from 'react-native-svg';
import { useHighlight } from '@/context/HighlightContext';
import Tooltip from '@/components/Tooltip';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default function HighlightOverlay() {
  const { highlights, clearHighlights } = useHighlight();

  if (highlights.length === 0) return null;

  return (
      <View style={[StyleSheet.absoluteFill, { zIndex: 999 }]}>
        <Svg width={screenWidth} height={screenHeight}>
          <Mask id="mask" x="0" y="0" width={screenWidth} height={screenHeight}>
            <Rect x="0" y="0" width={screenWidth} height={screenHeight} fill="white" />
            {highlights.map((rect, index) => (
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
            ))}
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

        {highlights.map((rect, index) => {
          if (!rect.tooltip) return null;

          return (
            <Tooltip
              key={`tooltip-${index}`}
              x={rect.x}
              y={rect.y}
              width={rect.width}
              height={rect.height}
              direction={rect.tooltipDirection || 'bottom'}
              heading={rect.tooltipContent?.heading || ''}
              content={rect.tooltipContent?.content || ''}
              stepNumber={rect.stepNumber || 1}
              totalSteps={rect.totalSteps || 1}
              onClose={clearHighlights}
            />
          );
        })}
      </View>
  );
}
