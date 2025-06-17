import React, { createContext, useContext, useState, ReactNode, useMemo } from 'react';

export type Highlight = {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  tooltip?: boolean;
  tooltipDirection?: 'top' | 'bottom' | 'left' | 'right';
  tooltipContent?: {
    heading: string;
    content: string;
  };
  stepNumber: number;
  screen: string;
};

interface TourContextType {
  highlights: Highlight[];
  currentStep: number;
  totalSteps: number;
  isTourActive: boolean;
  currentHighlights: Highlight[];
  startTour: () => void;
  nextStep: () => void;
  prevStep: () => void;
  endTour: () => void;
  registerHighlight: (highlight: Highlight) => void;
}

const TourContext = createContext<TourContextType | null>(null);

export const useTour = () => {
  const context = useContext(TourContext);
  if (!context) throw new Error('useTour must be used within a TourProvider');
  return context;
};

export const TourProvider = ({ children }: { children: ReactNode }) => {
  const [highlights, setHighlights] = useState<Highlight[]>([]);
  const [currentStep, setCurrentStep] = useState(1);
  const [isTourActive, setIsTourActive] = useState(false);

  const totalSteps = useMemo(() => {
    const uniqueSteps = new Set(highlights.map((h) => h.stepNumber));
    return uniqueSteps.size;
  }, [highlights]);

  const currentHighlights = useMemo(() => {
    return highlights.filter((h) => h.stepNumber === currentStep);
  }, [highlights, currentStep]);

  const startTour = () => {
    if (highlights.length > 0) {
      setIsTourActive(true);
      setCurrentStep(1);
    }
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
    } else {
      endTour();
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const endTour = () => {
    setIsTourActive(false);
    setHighlights([]);
    setCurrentStep(1);
  };

  const registerHighlight = (highlight: Highlight) => {
    setHighlights((prev) => {
      const exists = prev.some((h) => h.id === highlight.id);
      if (exists) return prev;
      return [...prev, highlight].sort((a, b) => a.stepNumber - b.stepNumber);
    });
  };

  return (
    <TourContext.Provider
      value={{
        highlights,
        currentStep,
        totalSteps,
        isTourActive,
        currentHighlights,
        startTour,
        nextStep,
        prevStep,
        endTour,
        registerHighlight,
      }}
    >
      {children}
    </TourContext.Provider>
  );
};
