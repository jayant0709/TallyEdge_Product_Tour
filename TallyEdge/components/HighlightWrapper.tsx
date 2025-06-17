import React, { useEffect, useRef } from 'react';
import { View, findNodeHandle, UIManager } from 'react-native';
import { useHighlight } from '@/context/HighlightContext';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface HighlightWrapperProps {
  children: React.ReactNode;
  tooltip?: boolean;
  tooltipDirection?: 'top' | 'bottom' | 'left' | 'right';
  tooltipHeading?: string;
  tooltipContent?: string;
  stepNumber: number;      
  totalSteps: number;      
}

export default function HighlightWrapper({
  children,
  tooltip = false,
  tooltipDirection = 'bottom',
  tooltipHeading = '',
  tooltipContent = '',
  stepNumber = 1,       
  totalSteps = 1,       
}: HighlightWrapperProps) {
  const { addHighlight } = useHighlight();
  const targetRef = useRef(null);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    setTimeout(() => measureTarget(), 0);
  }, []);

  const measureTarget = () => {
    if (targetRef.current) {
      const nodeHandle = findNodeHandle(targetRef.current);
      if (nodeHandle != null) {
        UIManager.measureInWindow(nodeHandle, (x, y, width, height) => {
          const adjustedY = y + insets.top;
          addHighlight({
            x,
            y: adjustedY,
            width,
            height,
            tooltip,
            tooltipDirection,
            tooltipContent: { heading: tooltipHeading, content: tooltipContent },
            stepNumber,
            totalSteps,
          });
        });
      }
    }
  };

  return <View ref={targetRef}>{children}</View>;
}
