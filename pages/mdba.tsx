import Head from 'next/head'

import QuestionnaireForm from '../components/QuestionnaireForm'
import { questionnaire } from '../data'
import { Questionnaire } from '../types'

type Props = {
  questionnaire: Questionnaire
}

export default function MDBA({ questionnaire }: Props) {
  console.log(`questionnaire`, questionnaire)
  return (
    <div>
      <Head>
        <title>El Mayo&apos;s Next.js + Tailwind starter</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <QuestionnaireForm questionnaire={questionnaire} />
      </main>
    </div>
  )
}

export async function getStaticProps() {
  return { props: { questionnaire } }
}
