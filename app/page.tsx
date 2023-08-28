'use client' 

import styles from './page.module.css'
import { useState } from 'react';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Typography variant='h6' component='h1'>Welcome to CuriousScourses</Typography>
      </div>
    </main>
  )
}
