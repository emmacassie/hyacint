import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>click me</title>
        <meta name="description" content="a website made for clicking" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Good morning &lt;3
        </h1>

      </main>

      <footer className={styles.footer}>
       
      </footer>
    </div>
  )
}
