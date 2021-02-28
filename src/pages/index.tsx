//import { Head } from 'next/document';
import { CompletedChallenges } from '../components/CompleteChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar';
import { Porfile } from '../components/Profile';

import Head from 'next/head';

import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <div className={styles.conteiner}>

      <Head>
        <title>Início | move.it</title>
      </Head>

    <ExperienceBar/>

    <section>

      <div>
        <Porfile/>
        <CompletedChallenges/>
        <Countdown/>
      </div>

      <div>

      </div>

    </section>
    </div>
  )
}
