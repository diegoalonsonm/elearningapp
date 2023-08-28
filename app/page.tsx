'use client' 
import styles from './page.module.css'
import { useState } from 'react';
import Button from '@mui/material/Button';

export default function Home() {
  
  const [courses, setCourses] = useState();
  
  async function fetchQuery() {
    const baseUrl = `http://localhost:1337/api`;
    const response = await fetch (`${baseUrl}/courses/`);
    const data = await response.json();
    setCourses(data);
    console.log(data);
    return data;
  }
  
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        hola
        <Button variant="contained" onClick={() => fetchQuery()}>fetch courses</Button>
      </div>
    </main>
  )
}