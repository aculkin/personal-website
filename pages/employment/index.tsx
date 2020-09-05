import * as React from 'react'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import { MainLayout } from '../../layouts/main-layout'

export const Employment: React.FC = () => {
  return (
    <MainLayout>
      <Head>
        <title>Andrew Culkin | Employment</title>
        <meta
          name="description"
          content="My employment history can be found here"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Employment</h1>

        <div className={styles.grid}>
          <a className={styles.card}>
            <h3>Employment</h3>
            <p>Employment</p>
          </a>
        </div>
      </main>
    </MainLayout>
  )
}

export default Employment
