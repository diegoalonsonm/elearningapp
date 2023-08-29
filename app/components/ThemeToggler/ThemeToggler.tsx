'use client'

import React, { useState } from 'react'
import scss from './ThemeToggler.module.scss'
import { IconButton, Typography, useMediaQuery } from '@mui/material'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import Brightness4Icon from '@mui/icons-material/Brightness4'

export type ThemeToggleButtonProps = {
    ColorModeContext: React.Context<{ toggleColorMode: () => void }>
    currentMode: 'light' | 'dark'
    showLabel?: boolean
}

const ThemeToggler = (props: ThemeToggleButtonProps) => {
    const {showLabel = true, currentMode, ColorModeContext} = props
    const mobileCheck = useMediaQuery('(min-width: 550px)')
    const colorMode = React.useContext(ColorModeContext)

    return (
        <>
            {mobileCheck && showLabel && <Typography>{currentMode}</Typography>}
            <IconButton
                className={scss[currentMode]}
                sx={{ mr: 2 }}
                title={currentMode + " mode"}
                aria-label={currentMode + " mode button"}
                onClick={colorMode?.toggleColorMode}
            >
                {currentMode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
        </>
    )
}

export default ThemeToggler