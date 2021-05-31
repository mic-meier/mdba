import Head from 'next/head'
import { useState } from 'react'

import BehaviourTypeTable from '../components/BehaviourTypeTable'
import QuestionnaireForm from '../components/QuestionnaireForm'
import ScatterChart from '../components/ScatterChart'
import { behaviourTypes, questionnaire } from '../data'
import { AnalysisResult } from '../lib/calculateResult'
import { Questionnaire } from '../types'

type Props = {
  questionnaire: Questionnaire
}

export default function Home({ questionnaire }: Props) {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [resultState, setResultState] = useState<AnalysisResult>({ x: 0, y: 0 })
  const [showTypes, setShowTypes] = useState(false)

  return (
    <div className="p-4">
      <Head>
        <title>El Mayo&apos;s MDBA Analyse</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-6xl mx-auto">
        <h1 className="text-center text-4xl font-bold text-purple-700 pt-10">
          Verhaltensanalyse
        </h1>
        {isFormSubmitted ? (
          <div>
            <h2 className="text-center text-2xl font-bold text-purple-700 pt-10 pb-10">
              Dein Resultat
            </h2>
            <ScatterChart dataPoints={resultState} />
            <div className="p-4 max-w-2xl mx-auto text-center">
              <button
                className="py-1 px-2 rounded-md text-white font-semibold uppercase bg-green-500"
                onClick={() => setIsFormSubmitted(false)}
              >
                Nochmals!
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="py-10 max-w-xs md:max-w-2xl mx-auto space-y-2">
              <p>
                {' '}
                Im folgenden Fragebogen sollst du angeben, wie du dich
                normalerweise in Alltagssituationen verhältst. Aus der
                Auswertung ergibt sich ein klares Bild wie du dich selbst
                siehst.
              </p>
              <p>
                Bewerte jedes Paar der Aussagen A und B mit insgesamt drei
                Punkten, je nachdem, wie zutreffend die Aussage ist. Auch wenn
                du glaubst, dass manche Aussagenpaare gleichermassen zutreffen,
                solltest du der Alternative mehr Punkte geben, die für dein
                Verhalten typischer ist.
              </p>
              <div className="py-4">
                <button
                  onClick={() => setShowTypes(!showTypes)}
                  className="py-1 px-2 rounded-md text-white font-semibold uppercase bg-green-500"
                >
                  {showTypes ? 'Typen ausblenden' : 'Zeige Typen'}
                </button>
              </div>
            </div>
            {showTypes ? (
              <BehaviourTypeTable behaviourTypes={behaviourTypes} />
            ) : null}
            <QuestionnaireForm
              questionnaire={questionnaire}
              setIsFormSubmitted={setIsFormSubmitted}
              submitResult={setResultState}
              resultState={resultState}
            />
          </>
        )}
      </main>
    </div>
  )
}

export async function getStaticProps() {
  return { props: { questionnaire, behaviourTypes } }
}
