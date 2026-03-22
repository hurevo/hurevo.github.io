"use client";

import { createContext } from "react";

type Theme = "dark" | "light" | "system";

interface ThemeProviderState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: "dark" | "light";
}

export const ThemeProviderContext = createContext<ThemeProviderState | undefined>(undefined);
