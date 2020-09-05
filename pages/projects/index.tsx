import * as React from 'react'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import { MainLayout } from '../../layouts/main-layout'

export const Projects: React.FC = () => {
  return (
    <MainLayout>
      <Head>
        <title>Andrew Culkin | Projects</title>
        <meta
          name="description"
          content="My Project history can be found here"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Projects</h1>

        <div className={styles.grid}>
          <a className={styles.card}>
            <h3>Projects</h3>
            <p>Projects</p>
          </a>
        </div>
      </main>
    </MainLayout>
  )
}

export default Projects
