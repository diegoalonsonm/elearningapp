'use client'

import './globals.css'
import type { Metadata } from 'next'
import Header from './components/Header/Header'
import { ThemeProvider, createTheme } from '@mui/material'
import useUserData, { UserDataType } from './hooks/useUserData'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  }
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const metadata: Metadata = {
    title: 'Curious Courses',
    description: 'Front end courses for curious minds',
  } 

  const userData = useUserData();

  return (
    <html lang="en">
      <body style={{background: 'black', color: 'white', maxWidth:'80rem', margin:'auto'}}>
        <ThemeProvider theme={darkTheme}>
          <Header userData={userData as UserDataType} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
