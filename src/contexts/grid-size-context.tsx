// src/contexts/grid-size-context.tsx
'use client';

import React, { createContext, useContext, useState, useMemo } from 'react';

type GridSizeContextType = {
  gridSize: number;
  setGridSize: (size: number) => void;
};

const GridSizeContext = createContext<GridSizeContextType | undefined>(undefined);

export function GridSizeProvider({ children }: { children: React.ReactNode }) {
  const [gridSize, setGridSize] = useState(3); // Default to 3x3

  const value = useMemo(() => ({ gridSize, setGridSize }), [gridSize]);

  return (
    <GridSizeContext.Provider value={value}>
      {children}
    </GridSizeContext.Provider>
  );
}

export function useGridSize() {
  const context = useContext(GridSizeContext);
  if (context === undefined) {
    throw new Error('useGridSize must be used within a GridSizeProvider');
  }
  return context;
}
