'use client'

import type { Metadata } from 'next'
import Header from './components/Header/Header'
import { CssBaseline, ThemeProvider, createTheme, useTheme } from '@mui/material'
import useUserData, { UserDataType } from './hooks/useUserData'
import lightTheme from './theme/lightTheme'
import darkTheme from './theme/darkTheme'
import React, { createContext, useState, useEffect, useMemo } from 'react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const metadata: Metadata = {
    title: 'Curious Courses',
    description: 'Front end courses for curious minds',
    keywords: 'e-learning, video courses, web development, react, javascript, next js'
  } 

  const ThemeMUIMode = createContext({
    toggleColorMode: () => {},
  })
  
  const userData = useUserData();

  const storedTheme = typeof window !== 'undefined' ? localStorage.getItem('theme') : 'dark'
  const initialMode = storedTheme || 'dark'

  const [mode, setMode] = useState<'light' | 'dark'>(initialMode as 'light' | 'dark');
  console.log(mode)
  
  const chosenTheme = mode === 'dark' ? darkTheme : lightTheme;

  const theme = useTheme();

  useEffect(() => {
    localStorage.setItem('theme', mode)
  }, [mode])

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));
      }
    }), []
  )

  return (
    <ThemeMUIMode.Provider value={colorMode}>
      <html lang="en">
        <head>
          <title>{metadata.title as React.ReactNode}</title>
          <meta charSet='utf-8'/>
          <meta name='description' content={metadata.description as string | undefined}/>
          <meta name='keywords' content={metadata.keywords as string | undefined}/>
          <meta name='author' content='Curious Courses'/>
          <meta name='viewport' content='width=device-width, initial-scale=1.0'/>
        </head>
        <ThemeProvider theme={createTheme(chosenTheme)}>
          <CssBaseline />
          <body style={{
              backgroundColor: chosenTheme?.palette?.background?.default,
              maxWidth: '80rem',
              margin: 'auto',
            }}>
              <Header 
                userData={userData}
                ColorModeContext={ThemeMUIMode}
                currentMode={mode}
                showLabel={false}
              />
              {children}
          </body>
        </ThemeProvider>
      </html>
    </ThemeMUIMode.Provider>
  )
}
