'use client';

import React from 'react'
import { SessionProvider } from 'next-auth/react'

// Theme Provider 
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"


const Providers = ({ children, ...props }: ThemeProviderProps) => {
  return (
    <NextThemesProvider attribute='class' defaultTheme='system' enableSystem>
      <SessionProvider>
        {children}
      </SessionProvider>
    </NextThemesProvider>
  )
}

export default Providers