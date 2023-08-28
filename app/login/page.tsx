'use client'

import React, {useState} from 'react';
import { TextField, Button, Typography } from '@mui/material';
import scss from './login.module.scss';

interface UserData {
    authToken: string;
    username: string;
    isLoggedIn: boolean;
}

const LoginPage = () => {
    const [identifier, setIdentifier] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loginError, setLoginError] = useState<string>('');
    const [userData, setUserData] = useState<UserData | null>(null);

    const handleLogin = async (e: any) => {
        e.preventDefault();

        try {
            const response = await fetch(`http://localhost:1337/api/auth/local`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }, 
                body : JSON.stringify({identifier, password})
            })

            const data = await response.json();

            if (response.ok) {
                const userData = {
                    authToken: data.jwt,
                    username: data.user.username,
                    isLoggedIn: data.user.confirmed
                }
                setUserData(userData);
                console.log(userData)
            } else {
                setLoginError(data.message[0].messages[0].message);
            }

        } catch (error) {
            console.log('login error', error)
            setLoginError('Login error occured. Try again later.');
        }
    }

    const handleSignOut = () => {
        setUserData(null);
        console.log(userData)
    }

    return (
        <div className={scss.login}>
            <Typography>Login</Typography>
            {!userData?.isLoggedIn && (
                <form onSubmit={handleLogin}>
                    <TextField
                        label="Username or Email"
                        variant="outlined"
                        value={identifier}
                        onChange={(e) => setIdentifier(e.target.value)}
                        fullWidth
                        margin='normal'
                    />
                    <TextField
                        label="Password"
                        variant="outlined"
                        type='password'
                        value={password}
                        autoComplete={'true'}
                        onChange={(e) => setPassword(e.target.value)}
                        fullWidth
                        margin='normal'
                    />
                    {loginError && <Typography style={{color: 'red'}}>{loginError}</Typography>}
                    <Button type='submit' variant='contained' color='success' 
                        onClick={handleLogin} style={{margin: '0.5rem'}}>
                        Login
                    </Button>
                    <Button variant='contained' color={'info'} href={'/register'}>
                        Register
                    </Button>
                </form>
            )}
            {userData?.isLoggedIn && ( 
                <div>
                    <p>Logged in as: {userData.username}</p>
                    <p>Is logged in: {userData.isLoggedIn ? 'Yes' :  'No'}</p>
                    <Button variant='contained' onClick={handleSignOut} color={'error'}>
                        Sign Out
                    </Button>
                </div>
            )}
        </div>
    )
}

export default LoginPage;