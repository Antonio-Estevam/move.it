//import { Head } from 'next/document';
import Head from 'next/head';

import { CompletedChallenges } from '../components/CompleteChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar';
import { Porfile } from '../components/Profile';


import styles from '../styles/pages/Home.module.css';
import { ChallengeBox } from '../components/ChallengeBox';
import { CountdownProvider } from '../contexts/CountdownContext';

export default function Home() {
  return (
    <div className={styles.conteiner}>

      <Head>
        <title>Início | move.it</title>
      </Head>

    <ExperienceBar/>

    <CountdownProvider>
     <section>

        <div>
          <Porfile/>
          <CompletedChallenges/>
          <Countdown/>
        </div>
        <div>
          <ChallengeBox/>

        </div>

      </section>
    </CountdownProvider>

    
    </div>
  )
}
