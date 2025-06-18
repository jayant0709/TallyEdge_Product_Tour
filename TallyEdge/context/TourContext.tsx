import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useMemo,
} from "react";
import { useRouter, usePathname } from "expo-router";

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

export const TOUR_STEPS = [
  { step: 1, screen: "/", description: "Link Accounts section" },
  { step: 2, screen: "/", description: "Manage Consents section" },
  { step: 3, screen: "/accounts", description: "Add Account button" },
] as const;

interface TourContextType {
  highlights: Highlight[];
  currentStep: number;
  totalSteps: number;
  isTourActive: boolean;
  currentHighlights: Highlight[];
  currentScreen: string;
  startTour: () => void;
  nextStep: () => void;
  prevStep: () => void;
  endTour: () => void;
  registerHighlight: (highlight: Highlight) => void;
}

const TourContext = createContext<TourContextType | null>(null);

export const useTour = () => {
  const context = useContext(TourContext);
  if (!context) throw new Error("useTour must be used within a TourProvider");
  return context;
};

export const TourProvider = ({ children }: { children: ReactNode }) => {
  const [highlights, setHighlights] = useState<Highlight[]>([]);
  const [currentStep, setCurrentStep] = useState(1);
  const [isTourActive, setIsTourActive] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const totalSteps = useMemo(() => {
    return TOUR_STEPS.length;
  }, []);
  const currentScreen = useMemo(() => {
    if (pathname === "/(drawer)/(tabs)" || pathname === "/(drawer)/(tabs)/")
      return "/";
    if (pathname === "/(drawer)/(tabs)/accounts") return "/accounts";
    if (pathname.includes("/accounts")) return "/accounts";
    return pathname;
  }, [pathname]);

  const currentHighlights = useMemo(() => {
    return highlights.filter(
      (h) => h.stepNumber === currentStep && h.screen === currentScreen
    );
  }, [highlights, currentStep, currentScreen]);

  const startTour = () => {
    if (TOUR_STEPS.length > 0) {
      setIsTourActive(true);
      setCurrentStep(1);
      const firstStep = TOUR_STEPS[0];
      if (currentScreen !== firstStep.screen) {
        if (firstStep.screen === "/") {
          router.push("/(drawer)/(tabs)/" as any);
        } else if (firstStep.screen === "/accounts") {
          router.push("/(drawer)/(tabs)/accounts" as any);
        }
      }
    }
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      const nextStepNumber = currentStep + 1;
      const nextStepInfo = TOUR_STEPS.find(
        (step) => step.step === nextStepNumber
      );
      if (nextStepInfo && nextStepInfo.screen !== currentScreen) {
        if (nextStepInfo.screen === "/") {
          router.push("/(drawer)/(tabs)/" as any);
        } else if (nextStepInfo.screen === "/accounts") {
          router.push("/(drawer)/(tabs)/accounts" as any);
        }
      }

      setCurrentStep(nextStepNumber);
    } else {
      endTour();
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      const prevStepNumber = currentStep - 1;
      const prevStepInfo = TOUR_STEPS.find(
        (step) => step.step === prevStepNumber
      );
      if (prevStepInfo && prevStepInfo.screen !== currentScreen) {
        if (prevStepInfo.screen === "/") {
          router.push("/(drawer)/(tabs)/" as any);
        } else if (prevStepInfo.screen === "/accounts") {
          router.push("/(drawer)/(tabs)/accounts" as any);
        }
      }

      setCurrentStep(prevStepNumber);
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
        currentScreen,
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
