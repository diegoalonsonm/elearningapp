'use client'

import React, { useState, useEffect } from 'react';
import { Typography, Button } from '@mui/material';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { UserDataType } from '@/app/hooks/useUserData';
import scss from './logout.module.scss';

const LogoutPage = () => {
    const [userData, setUserData] = useState<UserDataType | null>(null);
    const router = useRouter();

    useEffect(() => {
        const userDataCookie = Cookies.get('userData');
        const parsedUserData = JSON.parse(userDataCookie || '{}') as UserDataType;
        setUserData(parsedUserData);
        
    }, [])

    const handleSignOut = () => {
        Cookies.remove('userData');
        setUserData(null);
        location.reload()
    }

    const handleSignIn = () => {
        router.push('/login');
    }

    return (
        <div className={scss.logout}>
            {
                userData?.isLoggedIn ? (
                    <>
                        <Typography variant={'h6'}>
                            Are you sure you want to sign out?
                        </Typography>
                        <Button variant='contained' onClick={handleSignOut}>
                            Sign Out
                        </Button>
                    </>
                ) : (
                    <>
                        <Typography variant={'h6'}>
                            Thank you for visiting!
                        </Typography>
                        <Button variant='contained' onClick={handleSignIn}>
                            Sign In
                        </Button>

                    </>
                )
            }
        </div>
    )
}

export default LogoutPage;