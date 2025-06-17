import React, { createContext, useContext, useState, ReactNode } from 'react';

type Highlight = {
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
};

type TourStep = {
  stepNumber: number;
  screen: string;
  highlights: Highlight[];
};

type TourContextType = {
  steps: TourStep[];
  currentStepIndex: number;
  isTourActive: boolean;
  currentHighlights: Highlight[];
  startTour: (steps: TourStep[]) => void;
  nextStep: () => void;
  prevStep: () => void;
  endTour: () => void;
  registerHighlight: (highlight: Highlight, stepNumber: number, screen: string) => void;
};

const TourContext = createContext<TourContextType | null>(null);

export const useTour = () => {
  const context = useContext(TourContext);
  if (!context) throw new Error('useTour must be used within a TourProvider');
  return context;
};

export const TourProvider = ({ children }: { children: ReactNode }) => {
  const [steps, setSteps] = useState<TourStep[]>([]);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isTourActive, setIsTourActive] = useState(false);

  const currentHighlights = steps[currentStepIndex]?.highlights || [];

  const startTour = (tourSteps: TourStep[]) => {
    setSteps(tourSteps);
    setCurrentStepIndex(0);
    setIsTourActive(true);
  };

  const nextStep = () => {
    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex((prev) => prev + 1);
    } else {
      endTour();
    }
  };

  const prevStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1);
    }
  };

  const endTour = () => {
    setSteps([]);
    setCurrentStepIndex(0);
    setIsTourActive(false);
  };

  const registerHighlight = (highlight: Highlight, stepNumber: number, screen: string) => {
    setSteps((prevSteps) => {
      const stepExists = prevSteps.find((step) => step.stepNumber === stepNumber);

      if (stepExists) {
        return prevSteps.map((step) =>
          step.stepNumber === stepNumber
            ? { ...step, highlights: [...step.highlights, highlight] }
            : step
        );
      } else {
        return [...prevSteps, { stepNumber, screen, highlights: [highlight] }];
      }
    });
  };

  return (
    <TourContext.Provider
      value={{
        steps,
        currentStepIndex,
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
