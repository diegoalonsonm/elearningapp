'use client'

import { Button, Typography } from "@mui/material"
import scss from "./Header.module.scss"
import Link from "next/link"
import React from "react"
import { useRouter } from "next/navigation"
import { UserDataType } from "@/app/hooks/useUserData"

export type HeaderProps = {
    userData: UserDataType;
}

const Header: React.FC<HeaderProps> = ({userData}) => {
    const router = useRouter();

    const handleSignOut = () => {
        router.push('/logout')
    }

    const handleSignIn = () => {
        router.push('/login')
    }

    return (
        <header className={scss.header}>
            <nav className={scss.nav}>
                <ul className={scss.menu}>
                    <li><Button variant={'text'} href={'/'}><Typography variant={'h6'} style={{textTransform: 'initial'}}>CuriousCourses</Typography></Button></li>
                    <li>
                        <Link href="/"><Typography>Home</Typography></Link>
                    </li>
                    {!userData ? (
                        <>
                            <li>
                                <Link href="/login"><Typography>Login</Typography></Link>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <Link href="/profile"><Typography>Profile</Typography></Link>
                            </li>
                        </>
                    )}
                </ul>
                {
                    userData?.isLoggedIn ? (
                        <Button
                            className={scss.signOutBtn}
                            color={'error'}
                            //onClick={handleSignOut}
                            variant="contained"
                        >
                            <Link href='/logout'>
                                Sign Out
                            </Link>
                        </Button>
                    ) : (
                        <>
                            <Button
                                className={scss.signOutBtn}
                                color={'success'}
                                //onClick={handleSignIn}
                                variant="contained"
                                style={{marginRight: '1rem'}}
                            >
                                <Link href='/login'>
                                    Sign In
                                </Link>
                            </Button>
                            <Button
                                className={scss.signOutBtn}
                                color={'info'}
                                //href={'/register'}
                                variant="contained"
                            >
                                <Link href='/register'>
                                    Register
                                </Link>
                            </Button>
                        </>
                    )
                }
            </nav>
        </header>
    )
}

export default Header