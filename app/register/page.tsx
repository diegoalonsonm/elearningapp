'use client'

import React, { useState, SyntheticEvent } from 'react';
import { TextField, Button } from '@mui/material' 

const RegisterPage = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [email, setEmail] = useState<string>('');

    const handleRegister = async (e: SyntheticEvent) => {
        e.preventDefault()
        try {
            const response = await fetch('http://localhost:1337/api/auth/local/register', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({username, email, password})
            })
            const data = await response.json()
        } catch (error) {
            console.log('Registration error: ', error)
        }
    }

    return (
        <form onSubmit={handleRegister}>
            <TextField
                label="Username"
                variant='outlined'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                fullWidth
                margin='normal'
            />
            <TextField
                label="Email"
                type='email'
                variant='outlined'
                value={email}
                onChange={e => setEmail(e.target.value)}
                fullWidth
                margin='normal'
            />
            <TextField
                label="Password"
                variant='outlined'
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                fullWidth
                margin='normal'
            />
            <Button type="submit" variant="contained" color="primary">
                Register
            </Button>
        </form>
    )
}

export default RegisterPage;