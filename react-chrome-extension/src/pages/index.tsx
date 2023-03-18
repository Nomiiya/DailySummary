import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.scss'

const inter = Inter({ subsets: ['latin'] })

import Sidenav from './components/sidenav/sidenav'

export default function Home() {
  return (
    <>
      <Head>
        <title>Daily Summary Application</title>
        <meta name="description" content="A place to look at all your news quickly" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
          <Sidenav />
      </main>
    </>
  )
}