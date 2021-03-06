
import Head from 'next/head';

import React from 'react';
import { ChallengeBox } from '../components/ChallengeBox';
import {Countdown} from '../components/Countdown';
import {CompletedChallenges} from '../components/CompletedChallenges';
import { ExperienceBar } from '../components/experienceBar';
import { Profile } from "../components/profile";


import styles from '../styles/pages/Home.module.css';
import { CountdownProvider } from '../contexts/CountdownContext';



export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | move.it</title>
      </Head>

     <ExperienceBar />

     <CountdownProvider>
     <section>
       <div>
         <Profile />
         <CompletedChallenges />
         <Countdown />
       </div>
       <div>
          <ChallengeBox />
       </div>
     </section>
     </CountdownProvider>

   </div> 
  )
}
