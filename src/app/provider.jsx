// app/providers.tsx
'use client'
import { NextUIProvider } from "@nextui-org/react"
import {ThemeProvider as NextThemesProvider, useTheme} from "next-themes";


export function Providers({ children }) {
  const { theme, setTheme } = useTheme();

    return (
      <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        {children}
      </NextThemesProvider>
    </NextUIProvider>
    );
  }