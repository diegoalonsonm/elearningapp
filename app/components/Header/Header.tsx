'use client'

import { Button, Typography } from "@mui/material"
import scss from "./Header.module.scss"
import Link from "next/link"

const Header = () => {
    return (
        <header className={scss.header}>
            <ul className={scss.menu}>
                <li>
                    <Link href='/' className={scss.logo}>
                        <Typography variant='h6'>
                            CuriousCourses
                        </Typography>
                    </Link>
                </li>
                <li>
                    <Link href='/'>
                        <Typography>
                            Home
                        </Typography>
                    </Link>
                </li>
                <li>
                    <Link href='/profile'>
                        <Typography>
                            Profile
                        </Typography>
                    </Link>
                </li>
            </ul>
            <div className={scss.buttonMenu}>
                <Button variant="contained" color='success' href='/login'>Log In</Button>
                <Button variant="contained" color='error' href='/logout'>Log Out</Button>
                <Button variant="contained" color='info' href='/register'>Register</Button>
            </div>
        </header>
    )
}

export default Header