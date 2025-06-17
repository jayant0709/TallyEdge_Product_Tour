import React, { createContext, useContext, useState } from 'react';

export interface HighlightRect {
  x: number;
  y: number;
  width: number;
  height: number;
  tooltip?: boolean;
  tooltipDirection?: 'top' | 'bottom' | 'left' | 'right';
  tooltipContent?: { heading: string; content: string };
  stepNumber?: number;
  totalSteps?: number;
}


interface HighlightContextType {
  highlights: HighlightRect[];
  addHighlight: (rect: HighlightRect) => void;
  clearHighlights: () => void;
}

const HighlightContext = createContext<HighlightContextType | undefined>(undefined);

export const useHighlight = () => {
  const context = useContext(HighlightContext);
  if (!context) throw new Error('useHighlight must be used within a HighlightProvider');
  return context;
};

export const HighlightProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [highlights, setHighlights] = useState<HighlightRect[]>([]);

  const addHighlight = (rect: HighlightRect) => {
    setHighlights((prev) => [...prev, rect]);
  };

  const clearHighlights = () => {
    setHighlights([]);
  };

  return (
    <HighlightContext.Provider value={{ highlights, addHighlight, clearHighlights }}>
      {children}
    </HighlightContext.Provider>
  );
};
