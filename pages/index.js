import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  const greetings = {morning: ["goodmorning", "hey early bird", "its good to see you", "rise and shine!"], afternoon: ["good afternoon", "good day"], evening: ["good evening", "sleep tight"], night: ["hi u tiny bat", ]}
  let currentGreeting = "Hello" 
  const currentHour = new Date().getHours()
  const currentMinute = new Date().getMinutes()
  if ((currentHour >= 5 && currentHour < 12) || (currentHour === 5 && currentMinute > 30)) {currentGreeting = greetings.morning[0]}
  if ((currentHour >= 12 ) && (currentHour < 17))  {currentGreeting = greetings.afternoon[1]}
  if ((currentHour >= 17 && currentHour < 23) || (currentHour === 23 && currentMinute < 30))  {currentGreeting = greetings.evening[0]}
  if ((currentHour >= 0 && currentHour < 5) || (currentHour === 23 && currentMinute > 30))  {currentGreeting = greetings.night[1]}

  
  return (
    <div className={styles.container}>
      <Head>
        <title>click me</title>
        <meta name="description" content="a website made for clicking" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {currentGreeting} &lt;3
        </h1>

      </main>

      <footer className={styles.footer}>
       
      </footer>
    </div>
  )
}
