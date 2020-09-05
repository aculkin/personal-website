import * as React from 'react'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import { MainLayout } from '../../layouts/main-layout'

export const Education: React.FC = () => {
  return (
    <MainLayout>
      <Head>
        <title>Andrew Culkin | Education</title>
        <meta name="description" content="All my education can be found here" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Education</h1>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Education</h3>
            <p>Education</p>
          </a>
        </div>
      </main>
    </MainLayout>
  )
}

export default Education
