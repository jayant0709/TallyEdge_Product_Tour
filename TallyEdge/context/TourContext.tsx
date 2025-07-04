import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useMemo,
} from "react";
import { router } from "expo-router";
import { navigate, replace } from "expo-router/build/global-state/routing";

export type Highlight = {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  tooltip?: boolean;
  tooltipDirection?: "top" | "bottom" | "left" | "right";
  tooltipContent?: {
    heading: string;
    content: string;
  };
  stepNumber: number;
  screen: string;
};

type NavigationFunction = typeof router.push | typeof router.replace;

interface TourContextType {
  highlights: Highlight[];
  currentStep: number;
  totalSteps: number;
  isTourActive: boolean;
  currentHighlights: Highlight[];
  isIntroModalVisible: boolean;
  isExtroModalVisible: boolean;
  currentScreen: string;
  showIntroModal: () => void;
  hideIntroModal: () => void;
  showExtroModal: () => void;
  hideExtroModal: () => void;
  startTour: (navigate: NavigationFunction) => void;
  nextStep: (navigate: NavigationFunction) => void;
  prevStep: (navigate: NavigationFunction) => void;
  endTour: (navigate: NavigationFunction) => void;
  registerHighlight: (highlight: Highlight) => void;
}

const screenMap: { [key: number]: string } = {
  1: "/",
  2: "/",
  3: "/accounts/discover_accounts",
  4: "/accounts/discover_accounts",
  5: "/consents",
  6: "/consents/consentForm",
  7: "/consents/consentForm",
};

const TourContext = createContext<TourContextType | null>(null);

export const useTour = () => {
  const context = useContext(TourContext);
  if (!context) throw new Error("useTour must be used within a TourProvider");
  return context;
};

export const TourProvider = ({ children }: { children: ReactNode }) => {
  const [highlights, setHighlights] = useState<Highlight[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [isTourActive, setIsTourActive] = useState(false);
  const [currentScreen, setCurrentScreen] = useState(screenMap[1]);
  const [isIntroModalVisible, setIsIntroModalVisible] = useState(true);
  const [isExtroModalVisible, setIsExtroModalVisible] = useState(false);

  const showIntroModal = () => setIsIntroModalVisible(true);
  const hideIntroModal = () => setIsIntroModalVisible(false);

  const showExtroModal = () => setIsExtroModalVisible(true);
  const hideExtroModal = () => setIsExtroModalVisible(false);

  const totalSteps = Object.keys(screenMap).length;

  const currentHighlights = useMemo(() => {
    return highlights.filter(
      (h) => h.stepNumber === currentStep && h.screen === currentScreen
    );
  }, [highlights, currentStep, currentScreen]);

  const startTour = (navigate: NavigationFunction) => {
    setIsTourActive(true);
    setCurrentStep(1);
    navigate("/");
    setCurrentScreen(screenMap[1]);
    hideIntroModal();
  };

  const nextStep = (navigate: NavigationFunction) => {
    const nextStepNumber = currentStep + 1;

    if (screenMap[nextStepNumber]) {
      const targetScreen = screenMap[nextStepNumber];

      if (targetScreen !== currentScreen) {
        navigate(targetScreen as any);
      }

      setCurrentScreen(targetScreen);
      setCurrentStep(nextStepNumber);
    } else {
      endTour(navigate);
    }
  };

  const prevStep = (navigate: NavigationFunction) => {
    const prevStepNumber = currentStep - 1;

    if (screenMap[prevStepNumber]) {
      const targetScreen = screenMap[prevStepNumber];

      if (targetScreen !== currentScreen) {
        navigate(targetScreen as any);
      }

      setCurrentScreen(targetScreen);
      setCurrentStep(prevStepNumber);
    }
  };

  const endTour = (navigate: NavigationFunction) => {
    setIsTourActive(false);
    setCurrentStep(-1);
    setCurrentScreen("/");
    navigate("/");
    showExtroModal();
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
        currentScreen,
        isIntroModalVisible,
        isExtroModalVisible,
        showExtroModal,
        showIntroModal,
        hideIntroModal,
        hideExtroModal,
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
