'use client'

import './globals.css'
import type { Metadata } from 'next'
import Header from './components/Header/Header'
import { ThemeProvider, createTheme } from '@mui/material'

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

  return (
    <html lang="en">
      <body style={{background: 'black', color: 'white', maxWidth:'80rem', margin:'auto'}}>
        <ThemeProvider theme={darkTheme}>
          <Header />
          {children}
        </ThemeProvider>
        </body>
    </html>
  )
}
