'use client'

import scss from './profile.module.scss'
import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import { Typography, Button } from '@mui/material'
import Link from 'next/link'

const ProfilePage = () => {
    const router = useRouter()
    const [username, setUsername] = useState<string | null>('')

    useEffect(() => {
        const userDataCookie = Cookies.get('userData')
        const parsedUserData = JSON.parse(userDataCookie || '{}')
        setUsername(parsedUserData.username || null)
    }, [])

    const handleLogout = () => {
        Cookies.remove('userData')
        //router.push('/login')
    }

    return (
        <div className={scss.profile}>
            { username ? (
                <>
                    <Typography variant="h6" component={'h1'}>
                        Welcome <span style={{color: 'red'}}>{username}</span>!
                    </Typography>
                    <Button style={{marginTop: '2rem'}} variant='contained' 
                        //onClick={handleLogout}
                        color={'error'}>
                        <Link href='/logout'>Log Out</Link>
                    </Button>
                </>
            ) : (
                    <Typography>You need to sign in</Typography>
            )
            }
        </div>
    )
}

export default ProfilePage;